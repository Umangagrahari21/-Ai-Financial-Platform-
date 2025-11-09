const AuthLayout = ({ children }) => {
  return <div className="flex justify-center pt-40">{children}</div>;
  
};

export default AuthLayout;

// "use client";

// import { motion } from "framer-motion";

// const AuthLayout = ({ children }) => {
//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <motion.div
//         initial={{ y: 100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         {children}
//       </motion.div>
//     </div>
//   );
// };

// export default AuthLayout;

