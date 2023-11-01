// import { useState, useEffect } from "react";

// const useCurrencyInfo = (curreny :any) => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch currency data from an API or other data source
//     // For example, using fetch:
//     fetch(
//       "https://api.exchangerate-api.com/v4/latest/${currency}"
//     )
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setData(data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setIsLoading(false);
//       });
//   }, [curreny]);

//   // return { data, isLoading, error };
//   return data;
// };

// export default useCurrencyInfo;
