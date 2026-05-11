import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast"; // ✅ replaces alert() and confirm()
import API from "../api/axios";

const MyProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading]   = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMyProducts = async () => {
      try {
        const { data } = await API.get("/products/my-products");
        setProducts(data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load your products");
      } finally {
        setLoading(false);
      }
    };
    fetchMyProducts();
  }, []);

  const deleteHandler = async (id) => {
    /*
      WHY toast for delete confirmation instead of window.confirm()?
      window.confirm() is a blocking browser dialog — same problem as alert().
      Here we show a toast with an "Undo" style — user sees the action happen,
      and we give them a moment. In a real app you'd do optimistic delete
      (remove from UI immediately, undo if they click Undo).
      For now we just do a clean toast.error for delete confirmation.
    */
    const toastId = toast(
      (t) => (
        <div className="flex items-center gap-3">
          <span className="text-sm">Delete this product?</span>
          <button
            onClick={async () => {
              toast.dismiss(t.id);
              try {
                await API.delete(`/products/${id}`);
                setProducts((prev) => prev.filter((p) => p._id !== id));
                toast.success("Product deleted");
              } catch (err) {
                toast.error("Failed to delete product");
              }
            }}
            className="bg-red-500 text-white text-xs px-3 py-1 rounded-lg font-medium">
            Delete
          </button>
          <button onClick={() => toast.dismiss(t.id)}
            className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-lg font-medium">
            Cancel
          </button>
        </div>
      ),
      { duration: 5000 }
    );
    return toastId;
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="h-8 bg-gray-200 rounded w-1/4 mb-6 animate-pulse" />
        <div className="space-y-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-4
                                    flex gap-4 animate-pulse">
              <div className="w-16 h-16 bg-gray-200 rounded-lg shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-1/2" />
                <div className="h-3 bg-gray-200 rounded w-1/4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">My Products</h1>
          <p className="text-sm text-gray-500 mt-1">
            {products.length} {products.length === 1 ? "product" : "products"} listed
          </p>
        </div>
        <Link to="/add-product"
          className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500
                     text-gray-900 text-sm font-medium px-4 py-2.5 rounded-lg transition-colors">
          <span className="text-lg leading-none">+</span>
          Add Product
        </Link>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-20 bg-white border border-gray-200 rounded-xl">
          <div className="text-5xl text-gray-200 mb-4">📦</div>
          <h2 className="text-lg font-medium text-gray-600 mb-2">No products yet</h2>
          <p className="text-sm text-gray-400 mb-6">Start adding products to your store</p>
          <Link to="/add-product"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900
                       text-sm font-medium px-6 py-2.5 rounded-lg transition-colors">
            Add Your First Product
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {products.map((product) => {
            const imageUrl = product.images?.length > 0
              ? `http://localhost:5000/${product.images[0].replace(/^\//, "")}`
              : "https://placehold.co/80x80?text=?";

            return (
              <div key={product._id}
                className="bg-white border border-gray-200 rounded-xl p-4
                           flex items-center gap-4 hover:border-gray-300 transition-colors">
                <div className="w-16 h-16 bg-gray-50 rounded-lg overflow-hidden shrink-0
                                flex items-center justify-center border border-gray-100">
                  <img src={imageUrl} alt={product.name}
                    className="max-h-full max-w-full object-contain p-1" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-800 truncate">{product.name}</h3>
                  <p className="text-sm font-semibold text-gray-900 mt-0.5">₹{product.price}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    {product.category && (
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                        {product.category}
                      </span>
                    )}
                    {product.averageRating > 0 && (
                      <span className="text-xs text-gray-400">
                        ★ {Number(product.averageRating).toFixed(1)}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button onClick={() => navigate(`/edit-product/${product._id}`)}
                    className="px-4 py-1.5 text-sm text-gray-700 border border-gray-300
                               rounded-lg hover:bg-gray-50 transition-colors">
                    Edit
                  </button>
                  <button onClick={() => deleteHandler(product._id)}
                    className="px-4 py-1.5 text-sm text-red-600 border border-red-200
                               rounded-lg hover:bg-red-50 transition-colors">
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyProductsPage;