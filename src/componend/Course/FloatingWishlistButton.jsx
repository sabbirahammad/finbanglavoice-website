// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const FloatingWishlistButton = () => {
//   const [count, setCount] = useState(0);

//   // Live update on every render (can be optimized with context later)
//   useEffect(() => {
//     const updateCount = () => {
//       const saved = JSON.parse(localStorage.getItem('wishlist')) || [];
//       setCount(saved.length);
//     };

//     updateCount();

//     window.addEventListener('storage', updateCount); // if other tab updates
//     return () => window.removeEventListener('storage', updateCount);
//   }, []);

//   return (
//     <Link
//       to="/wishlist"
//       className="fixed top-5 right-5 z-50 bg-white border shadow-lg px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-50 transition"
//     >
//       <span className="text-red-500 text-lg">💖</span>
//       <span className="text-sm font-medium text-gray-700">Wishlist</span>
//       {count > 0 && (
//         <span className="bg-pink-600 text-white text-xs px-2 py-0.5 rounded-full">
//           {count}
//         </span>
//       )}
//     </Link>
//   );
// };

// export default FloatingWishlistButton;
