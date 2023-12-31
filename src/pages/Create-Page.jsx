import { useState } from "react"
import Input from "../components/Input";
import { createProducts } from "../services/products-service";
import { Link } from "react-router-dom";
import { IoChevronBackCircleSharp} from 'react-icons/io5';
import { CustomAlert, CustomButton, CustomContent, CustomFooter, CustomForm, customIcono } from "./CustomCss";


const CreatePage = () => {
    const [formData, setFormData] = useState({
        name: "",
        price:"",
        description:"",
        category:"",
        picture_url:"",
    })

    const [confirmationMessage, setConfirmationMessage] = useState(null); 

    function handleSubmit(event) {
        event.preventDefault();
        createProducts(formData)
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
    <CustomContent>
        <CustomFooter>
            <Link to="/">
                <IoChevronBackCircleSharp className={customIcono}/>
            </Link>
            <h1>Create Product</h1>  
        </CustomFooter>
    {confirmationMessage && <CustomAlert>{confirmationMessage}</CustomAlert>}
    <CustomForm onSubmit={handleSubmit}>
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
        <CustomButton type="submit">Create</CustomButton>
    </CustomForm>
    
    </CustomContent>
  )
}

export default CreatePage