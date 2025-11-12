import { useState } from "react";
import { toast } from "sonner";

// const useFetch = (cb) => {
//   const [data, setData] = useState(undefined);
//   const [loading, setLoading] = useState(null);
//   const [error, setError] = useState(null);

//   const fn = async (...args) => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await cb(...args);
//       setData(response);
//       setError(null);
//     } catch (error) {
//       setError(error);
//       toast.error(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { data, loading, error, fn, setData };
// };

const useFetch = (fn) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const wrappedFn = async (body) => {
    setLoading(true);
    try {
      const res = await fn(body); // don’t stringify if it’s FormData
      setData(res);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, data, error, fn: wrappedFn };
};


export default useFetch;
