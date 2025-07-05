// // src/pages/Signup.jsx
// import React, { useState } from 'react';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../componend/Privatecoursepage/firebase';
// import { db } from '../componend/Privatecoursepage/firebase';
// import { doc, setDoc } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // ✅ Create user document with approved: false
//       await setDoc(doc(db, 'users', user.uid), {
//         email: user.email,
//         approved: false,
//       });

//       // ✅ Redirect to pending page, allow user to stay logged in
//       navigate('/pending');
//     } catch (err) {
//       alert('Signup failed: ' + err.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <form
//         onSubmit={handleSignup}
//         className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm"
//       >
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">📝 Sign Up</h2>

//         <input
//           type="email"
//           placeholder="Your email"
//           className="w-full px-4 py-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Your password"
//           className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//         >
//           Create Account
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Signup;



