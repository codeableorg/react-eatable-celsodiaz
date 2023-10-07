import { Link, useParams } from "react-router-dom";
import Input from "../components/Input";
import { useEffect, useState } from "react";
import { useAuth } from "../context/Product-context";

const EditPage = () => {
  const { productId } = useParams();
  const { UpdateProduct, products } = useAuth();
  
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    picture_url: "",
  });
  useEffect(() => {

    const productFind = products.find((productFind) => productFind.id === parseInt(productId, 10));
    if (productFind) {
      setFormData({
        name: productFind.name || "",
        price: productFind.price || "",
        description: productFind.description || "",
        category: productFind.category || "",
        picture_url: productFind.picture_url || "",
      });
    }
  }, []); 
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    await UpdateProduct(formData, productId); 
    setFormData({
      name: "",
      price: "",
      description: "",
      category: "",
     picture_url: "",
    });
  };
  

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <>
      <Link to="/">Back</Link>
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          label="Name:"
        />
        <Input
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          label="Price:"
        />
        <Input
          name="description"
          type="text"
          value={formData.description}
          onChange={handleChange}
          label="Description:"
        />
        <Input
          name="category"
          type="text"
          value={formData.category}
          onChange={handleChange}
          label="Category:"
        />
        <Input
          name="picture_url"
          type="text"
          value={formData.picture_url}
          onChange={handleChange}
          label="Picture URL:"
        />
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default EditPage;
