import { createContext, useContext, useEffect, useState } from "react";
import * as auth from "../services/products-service";

const AuthContext = createContext();

function parseProducts(products) {
	return products.map((product) => parseProduct(product));
  }
  
  function parseProduct(product) {
	const { id, name, price, category, description, picture_url } = product;
	return {
	  id,
	  name,
	  price,
	  category,
	  description,
	  picture_url,
	};
  }

function ProductProvider({ children }) {
	const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    auth.getProducts()
      .then((data) => {
        const parsedProducts = parseProducts(data);
        setProducts(parsedProducts);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
      });
  }, [products]);

  function DeleteProduct(product) {
    const productFind = products.find(
      (productFind) => productFind.name === product.name
    );
    auth.deleteProduct(productFind.id).then(() => {
      const newProducts = products.filter(
        (productDelete) => productDelete.name != product.name
      );
      setProducts(newProducts);
    }).catch((error) => {
      console.error("Error al borrar el producto", error);
      setError("Product cannot be deleted. Please try again later.");
    });;
  }

  function UpdateProduct(productData, productId) {
    return new Promise((resolve, reject) => {
      auth.editProduct({ id: productId, productData })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  
  return (
		<AuthContext.Provider
		value={{products,DeleteProduct,UpdateProduct,error}}>
			{children}
		</AuthContext.Provider>);
}
function useAuth() {
  return useContext(AuthContext);
}

export { ProductProvider, useAuth };