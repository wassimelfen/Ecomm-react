export const fetchDataFromAPI = () => {
  return fetch("https://fakestoreapi.com/products")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};
