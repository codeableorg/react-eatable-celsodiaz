import Product from "./Product"

const ProductsList = ({products}) => {
  return (
    <ul>
        {products.map((product)=>(
        <Product key={product.id} product={product}/>
        ))}
   </ul>
  )
}

export default ProductsList