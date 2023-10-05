import Container from "../components/Container";

const DetailsPage = ({product}) => {

  return (
    <Container>
        <div>
            <img src={product.imagen} alt={product.description} />
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>Description:</p>
            <span>
                {product.description}
            </span>
        </div>
        <button>Go Back</button>
    </Container>
  );
};

export default DetailsPage;