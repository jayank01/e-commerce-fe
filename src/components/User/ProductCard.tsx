import { Button, Card } from "react-bootstrap";
import React from "react";
import { Product } from "../../models/Interfaces";
import { base64ToUrl } from "../../utils/base64ToUrl";
// import { RiMoneyRupeeCircleFill } from "react-icons/ri";

interface ProductCardProps {
  data: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  let { productName, price, image, description} = data;
  // console.log(productName, price, imageFileBase64, description, category);
  return (
    <Card style={{ width: "320px", height: "auto" }} className="mx-auto">
      <Card.Img
        variant="top"
        height={"150px"}
        className="mt-3"
        src={base64ToUrl(image)}
        style={{ objectFit: "contain" }}
      />
      <Card.Body className="mt-3">
        <Card.Title style={{ height: "50px", overflow: "hidden" }}>
          {productName}
        </Card.Title>
        <Card.Text style={{ height: "90px", overflow: "hidden" }}>
          {description}
        </Card.Text>
        <Card.Text>Price: {price}</Card.Text>
        {/* <Card.Text>Category: {category.categoryName}</Card.Text> */}
        <div className="w-100  d-flex justify-content-between ">
          <Button variant="primary">Add to Cart</Button>
          <Button variant="success">View More</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
