import { Link } from "react-router-dom"
import Input from "../components/Input"
import { editProduct } from "../services/products-service";
import { useState } from "react";

const EditPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    price:"",
    description:"",
    category:"",
    picture_url:"",
})
  function handleSubmit(event) {
    event.preventDefault();
    editProduct(formData)
        .then((product) => {
            console.log(product);
            setConfirmationMessage("El producto fue creado exitosamente.");
            setFormData({  
                name: "",
                price: "",
                description: "",
                category: "",
                picture_url: "",
            }); 
        })
        .catch((error) => {
            console.log(error);
            setConfirmationMessage("Hubo un error al crear el producto."); 
        });
}

function handleChange(event){
    const {name,value} = event.target;
    setFormData({...formData,[name]: value});
}
  return (
    <>
    <Link to="/">Back</Link>
    <h1>Create Product</h1>
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
        <button type="submit">Create</button>
    </form>
    </>
  )
}

export default EditPage