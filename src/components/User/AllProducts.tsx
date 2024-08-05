import { SetStateAction, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Product } from "../../models/Interfaces";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { useSearch } from "./SearchContext";
import toast from "react-hot-toast";

const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [index, setIndex] = useState(0);
  const { searchTerm } = useSearch();
//   console.log(searchTerm);
  console.log(products);
  const handleSelect = (selectedIndex: SetStateAction<number>) => {
    setIndex(selectedIndex);
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:8080/product");

      const data = await response.json();
      if (!response.ok) {
        throw new Error("Network response not ok")
      }
      
      // console.log(data);
      setProducts(data); // Replace entire products array with fetched data
    } catch (error) {
        toast.error("No products found ")
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filteredProducts = products.filter((product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProducts(filteredProducts);
    }
    else{
        fetchProducts();
    }
  }, [searchTerm]);

  return (
    <>
      <Carousel
        interval={2000}
        className="mx-auto rounded overflow-hidden"
        activeIndex={index}
        onSelect={handleSelect}
        style={{ width: "95%", height: "65vh", marginTop: "5vh" }}
      >
        <Carousel.Item style={{ overflow: "hidden", height: "65vh" }}>
          <img
            width={"100%"}
            style={{ objectFit: "fill" }}
            height={"100%"}
            src="https://static.vecteezy.com/system/resources/previews/029/242/027/non_2x/set-of-fresh-fruits-agriculture-farmers-market-local-produce-shopping-and-harvesting-text-poster-flat-illustration-vector.jpg"
          />
        </Carousel.Item>
        <Carousel.Item style={{ overflow: "hidden", height: "65vh" }}>
          <img
            width={"100%"}
            style={{ objectFit: "fill" }}
            height={"100%"}
            src="https://previews.123rf.com/images/sokolfly/sokolfly1906/sokolfly190600078/125579617-farmers-market-icon-illustration-vector-local-farm-banner-with-place-for-text-agriculture-background.jpg"
          />
        </Carousel.Item>
        <Carousel.Item style={{ overflow: "hidden", height: "65vh" }}>
          <img
            width={"100%"}
            style={{ objectFit: "fill" }}
            height={"100%"}
            src="https://static.vecteezy.com/system/resources/previews/038/047/504/non_2x/vegetarian-food-banner-template-design-vector.jpg"
          />
        </Carousel.Item>
      </Carousel>
      <Container className="mt-5 d-flex justify-content-center align-items-center ">
        <Row>
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <ProductCard data={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AllProducts;
