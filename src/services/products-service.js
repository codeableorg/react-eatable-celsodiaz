const BASE_URL = "https://react-eatable-api.herokuapp.com";
export function getProducts() {
  return fetch(
    `${BASE_URL}/products`
  ).then((response) => response.json());
}