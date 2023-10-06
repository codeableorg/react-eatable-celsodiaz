import apiFetch from "./api-fetch";

export function getProducts() {
  return apiFetch("/products").then((products)=>{
    return products;
  });
}

export function createProducts(productData){
  return apiFetch("/products", { body: userData }).then((userData) => {
    return userData;
  });
}
