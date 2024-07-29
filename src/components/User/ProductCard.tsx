import { Button, Card } from "react-bootstrap";
import React from "react";
import { Product } from "../../models/Interfaces";
// import { RiMoneyRupeeCircleFill } from "react-icons/ri";

interface ProductCardProps {
  data: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  let { title, price, image, description, category } = data;
  return (
    <Card style={{ width: "320px", height: "500px" }} className="mx-auto">
      <Card.Img
        variant="top"
        height={"150px"}
        className="mt-3"
        src={image}
        style={{ objectFit: "contain" }}
      />
      <Card.Body className="mt-3">
        <Card.Title style={{ height: "50px", overflow: "hidden" }}>
          {title}
        </Card.Title>
        <Card.Text style={{ height: "90px", overflow: "hidden" }}>
          {description}
        </Card.Text>
        <Card.Text>Price: {price}</Card.Text>
        <Card.Text>Category: {category}</Card.Text>
        <div className="w-100  d-flex justify-content-between ">
          <Button variant="primary">Add to Cart</Button>
          <Button variant="success" >
            View More
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
