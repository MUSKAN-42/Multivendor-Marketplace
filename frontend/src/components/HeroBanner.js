// const HeroBanner = () => {
//   return (
//     <div className="w-full">

//       {/* Banner */}
//       <div
//         className="relative w-full h-[260px] md:h-[350px] bg-cover bg-center flex items-center"
//         style={{
//           backgroundImage:
//             "url('src/assest/image.jpeg')",
//         }}
//       >

//         {/* Overlay (slight dark for readability) */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>

//         {/* Content
//         <div className="relative max-w-6xl mx-auto w-full px-4 flex items-center justify-end"> */}

//           {/* Right Content
//           <div className="text-white text-center md:text-left max-w-xs md:max-w-sm">

//             <p className="text-sm md:text-base font-medium">
//               Upto <span className="text-yellow-300 font-bold">35% OFF</span> on your first order
//               <br />
//               <span className="text-xs opacity-80">*Only on App</span>
//             </p> */}

//             {/* QR Code
//             <div className="mt-4 flex justify-center md:justify-start">
//               <img
//                 src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://yourapp.com"
//                 alt="QR"
//                 className="bg-white p-2 rounded"
//               />
//             </div> */}

//             {/* <p className="text-xs mt-2">Scan now to install</p>
//           </div>
//         </div>*/}
        
//       </div> 

//       {/* Bottom Strip */}
//       <div className="bg-gray-100 border rounded-xl mx-4 md:mx-10 mt-3 py-3">
//         <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-gray-700 font-medium">

//           <div className="flex items-center gap-2">
//             <span>↩️</span> 7 Days Easy Return
//           </div>

//           <div className="hidden md:block">|</div>

//           <div className="flex items-center gap-2">
//             <span>💰</span> Cash on Delivery
//           </div>

//           <div className="hidden md:block">|</div>

//           <div className="flex items-center gap-2">
//             <span>🏷️</span> Lowest Prices
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroBanner;

const HeroBanner = () => {
  return (
    <div className="w-full">

      {/* Banner */}
      <div
        className="relative w-full h-[260px] md:h-[350px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('/shopzone.jpeg')",
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto w-full px-4 flex items-center justify-end">

          {/* Right Content */}
          <div className="text-white text-center md:text-left max-w-xs md:max-w-sm">

            {/* <p className="text-sm md:text-base font-medium">
              Upto{" "}
              <span className="text-yellow-300 font-bold">35% OFF</span> on your first order
              <br />
              <span className="text-xs opacity-80">*Only on App</span>
            </p> */}

          </div>
        </div>

      </div>

      {/* Bottom Strip */}
      {/* <div className="bg-gray-100 border rounded-xl mx-4 md:mx-10 mt-3 py-3">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-gray-700 font-medium">

          <div className="flex items-center gap-2">
            <span>↩️</span> 7 Days Easy Return
          </div>

          <div className="hidden md:block">|</div>

          <div className="flex items-center gap-2">
            <span>💰</span> Cash on Delivery
          </div>

          <div className="hidden md:block">|</div>

          <div className="flex items-center gap-2">
            <span>🏷️</span> Lowest Prices
          </div>

        </div>
      </div> */}

    </div>
  );
};

export default HeroBanner;