import { useState, useEffect } from "react";


export function useLoading () {

  const [loading, setLoading] = useState(true);

   useEffect(() => {
     const timeout = setTimeout(() => {
       setLoading(!loading);
     }, 1200); // Tiempo que durará el loader

     return () => clearTimeout(timeout);
   }, []);


  return {loading}
}