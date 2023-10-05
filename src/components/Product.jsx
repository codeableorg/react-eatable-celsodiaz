const Product = ({product}) => {
  return (
    <li >
        <p>{product.name}</p>
        <img src={product.imagen} alt={product.description}/>
    </li>
  )
}

export default Product