import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 
                      grid-cols-1 sm:grid-cols-2 md:grid-cols-4">

        {/* Logo + About */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">ShopZone</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            India’s trusted online shopping platform for fashion, electronics,
            home & more. Quality products at best prices.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-3">Group Companies</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="https://www.myntra.com/?utm_source=dms_google&utm_medium=dms_searchbrand_cpc&utm_campaign=dms_google_searchbrand_cpc_Search_Brand_Myntra_Brand_India_BM_TROAS_SOK_New&gad_source=1&gad_campaignid=20443628324&gbraid=0AAAAADoxBh4Gdq3gOzZ0QpJ-7YomSAMdq&gclid=Cj0KCQjwh-HPBhCIARIsAC0p3cfkuskcAt0CZLp-ewlvzD1zTxs2DcFIs1hbVgOBAA2pvpviLSaMdY8aAsT_EALw_wcB" className="hover:text-yellow-400">Myntra</Link></li>
            <li><Link to="https://www.shopsy.in/?affid=mrndigital&cmpid=AFF_mrndigital&affExtParam1=1111&affExtParam2=2222&gad_source=1&gad_campaignid=23787962317&gbraid=0AAAAA-Pdoo2Lg-BnH_lJnqw3fUGpBVq4w&gclid=Cj0KCQjwh-HPBhCIARIsAC0p3cdsEUCZgtBEqYPCG3KEtT3PBTmRLdSiU1UHdGViHVsHLpMHgCZD_-MaAoWMEALw_wcB" className="hover:text-yellow-400">Shopsy</Link></li>
            <li><Link to="https://www.meesho.com/?srsltid=AfmBOoqgr6LS3yUORRG304MqRgs-32sHfo2goiU0SlkxplqK2VcVHPAG%22" className="hover:text-yellow-400">Meesho</Link></li>
            <li><Link to="https://www.snapdeal.com/" className="hover:text-yellow-400">Snapdeal</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-white font-semibold mb-3">Help</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-yellow-400">Support</Link></li>
            <li><Link to="/" className="hover:text-yellow-400">FAQs</Link></li>
            <li><Link to="/" className="hover:text-yellow-400">Shipping</Link></li>
            <li><Link to="/" className="hover:text-yellow-400">Returns</Link></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm text-gray-400">Email: muskanrangra19@gmail.com</p>
          <p className="text-sm text-gray-400 mb-3">Phone: +91 98765 43210</p>

          <div className="flex gap-3 mt-2">
            <a href="" className="bg-gray-800 p-2 rounded-full hover:bg-yellow-400 hover:text-black transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="bg-gray-800 p-2 rounded-full hover:bg-yellow-400 hover:text-black transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="bg-gray-800 p-2 rounded-full hover:bg-yellow-400 hover:text-black transition">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} ShopZone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

// import { Link } from "react-router-dom";
// import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-[#212121] text-gray-300 text-sm">

//       {/* Top Section */}
//       <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-6 gap-8">

//         {/* ABOUT */}
//         <div>
//           <h3 className="text-gray-400 uppercase text-xs mb-3">About</h3>
//           <ul className="space-y-2">
//             <li><Link to="/contact">Contact Us</Link></li>
//             <li><Link to="/about">About Us</Link></li>
//             <li><Link to="/careers">Careers</Link></li>
//             <li><Link to="/blog">ShopZone Stories</Link></li>
//           </ul>
//         </div>

//         {/* GROUP COMPANIES */}
//         <div>
//           <h3 className="text-gray-400 uppercase text-xs mb-3">Group Companies</h3>
//           <ul className="space-y-2">
//             <li>ShopZone Mart</li>
//             <li>ShopZone Pay</li>
//             <li>ShopZone Logistics</li>
//           </ul>
//         </div>

//         {/* HELP */}
//         <div>
//           <h3 className="text-gray-400 uppercase text-xs mb-3">Help</h3>
//           <ul className="space-y-2">
//             <li><Link to="/payments">Payments</Link></li>
//             <li><Link to="/shipping">Shipping</Link></li>
//             <li><Link to="/returns">Returns</Link></li>
//             <li><Link to="/faq">FAQ</Link></li>
//           </ul>
//         </div>

//         {/* POLICY */}
//         <div>
//           <h3 className="text-gray-400 uppercase text-xs mb-3">Consumer Policy</h3>
//           <ul className="space-y-2">
//             <li><Link to="/returns">Cancellation & Returns</Link></li>
//             <li><Link to="/terms">Terms Of Use</Link></li>
//             <li><Link to="/security">Security</Link></li>
//             <li><Link to="/privacy">Privacy</Link></li>
//           </ul>
//         </div>

//         {/* MAIL US */}
//         <div>
//           <h3 className="text-gray-400 uppercase text-xs mb-3">Mail Us</h3>
//           <p className="leading-6">
//             ShopZone Pvt Ltd,<br />
//             India<br />
//             support@shopzone.com
//           </p>

//           {/* Social */}
//           <p className="mt-4 text-gray-400">Social:</p>
//           <div className="flex gap-4 mt-2 text-lg">
//             <FaFacebookF className="cursor-pointer hover:text-white" />
//             <FaTwitter className="cursor-pointer hover:text-white" />
//             <FaYoutube className="cursor-pointer hover:text-white" />
//             <FaInstagram className="cursor-pointer hover:text-white" />
//           </div>
//         </div>

//         {/* ADDRESS */}
//         <div>
//           <h3 className="text-gray-400 uppercase text-xs mb-3">
//             Registered Office Address
//           </h3>
//           <p className="leading-6">
//             ShopZone Pvt Ltd,<br />
//             Bengaluru, India<br />
//             Phone: +91 98765 43210
//           </p>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="border-t border-gray-700"></div>

//       {/* Bottom Section */}
//       <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">

//         <div className="flex flex-wrap gap-6 text-sm">
//           <span className="hover:text-white cursor-pointer">Become a Seller</span>
//           <span className="hover:text-white cursor-pointer">Advertise</span>
//           <span className="hover:text-white cursor-pointer">Gift Cards</span>
//           <span className="hover:text-white cursor-pointer">Help Center</span>
//         </div>

//         <div className="text-gray-400">
//           © {new Date().getFullYear()} ShopZone.com
//         </div>

//         {/* Payment Icons (simple text version) */}
//         <div className="flex gap-2 text-xs">
//           <span className="bg-gray-700 px-2 py-1 rounded">VISA</span>
//           <span className="bg-gray-700 px-2 py-1 rounded">Mastercard</span>
//           <span className="bg-gray-700 px-2 py-1 rounded">UPI</span>
//           <span className="bg-gray-700 px-2 py-1 rounded">COD</span>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;