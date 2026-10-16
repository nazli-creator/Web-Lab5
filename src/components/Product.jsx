import Card from "./Card";

function Product({ title, price }) {
  return (
    <Card>
      <h3>{title}</h3>
      <p>Price: ${price}</p>
    </Card>
  );
}

export default Product;
