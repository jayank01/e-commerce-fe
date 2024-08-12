import { Button, Card } from "react-bootstrap";
import React from "react";
import { Product } from "../../models/Interfaces";
import { base64ToUrl } from "../../utils/base64ToUrl";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";


interface ProductCardProps {
  data: Product;
  onAddToCart: (product: Product) => void;
}
const ProductCard: React.FC<ProductCardProps> = ({ data,onAddToCart}) => {
  let { productName, price, image, description} = data;
  // console.log(productName, price, imageFileBase64, description, category);
  

  
  return (
    <Card style={{ width: "320px", height: "auto" }} className="mx-auto">
      <Card.Img
        variant="top"
        height={"250px"}
        src={base64ToUrl(image)}
        style={{ objectFit: "cover",borderRadius: "5px" }}
      />
      <Card.Body className="mt-2">
        <Card.Title style={{ overflow: "hidden",fontSize: "28px",fontFamily: "monospace" }}>
          {productName}
        </Card.Title>
        <Card.Text style={{ height: "45px", overflow: "hidden",fontFamily: "monospace"  ,textOverflow: "ellipsis",color: "GrayText"}}>
          {description}
        </Card.Text>
        <Card.Text className="d-flex justify-content-start align-items-center "><RiMoneyRupeeCircleFill className="mx-1 "/> {price}</Card.Text>
        {/* <Card.Text>Category: {category.categoryName}</Card.Text> */}
      
          <Button variant="success" className="w-100" onClick={()=> onAddToCart(data)}>Add to Cart</Button>
          {/* <Button variant="success" className="w-100" >Add to Cart</Button> */}
       
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
