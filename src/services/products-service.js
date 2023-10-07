import apiFetch from "./api-fetch";

export function getProducts() {
  return apiFetch("/products");
}

export function createProducts(productData){
  return apiFetch("/products", { body: productData});
}
