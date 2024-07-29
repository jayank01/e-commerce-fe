import { useEffect, useState } from "react";
import { Dropdown, Form, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import toast from "react-hot-toast";
import { AllProducts, Category } from "../../models/Interfaces";
import { base64ToUrl } from "../../utils/base64ToUrl";


interface Product {
  productName: string;
  description: string;
  price: number;
  quantity: number;
}

const Dashboard = () => {
  const [addCategory, setAddCategory] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [allCategory, setAllCategory] = useState<Category[]>([]);
  const [allProduct, setAllProduct] = useState<AllProducts[]>([]);
  // console.log(allCategory)
  console.log(allProduct)
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const [createProduct, setCreateProduct] = useState<Product>({
    productName: "",
    description: "",
    price: 0,
    quantity: 0,
  });


  const handleChange = (e: { target: { name: string; value: string } }) => {
    let { name, value } = e.target;

    setCreateProduct((pre) => {
      return { ...pre, [name]: value };
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
  };
  // console.log(selectedFile)

  const handleNewProduct = async () => {
  
    const formData = new FormData();
    // Append fields from createProduct
    formData.append('productName',createProduct.productName);
    formData.append('description',createProduct.description);
    formData.append('price',createProduct.price.toString());
    formData.append('quantity',createProduct.quantity.toString());
    // Append additional fields
    formData.append('categoryId', `${selectedCategory?.id}`);
    formData.append('stock', 'Instock');
    
    // Append the image file if selected
    if (selectedFile) {
      formData.append('imageFile', selectedFile);
    }

    setShowProd(false);
    // console.log(dataToSend);
    
    try {
      const res = await fetch("http://localhost:8080/product", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      // console.log(res);
      if (!res.ok) {
        throw new Error(data.message);
      }
      toast.success(data.message);

      // console.log(data)
    } catch (error: any) {
      toast.error(error.message);
    }
    fetchProducts();
  };

  const handleChangeCategory = (e: any) => {
    setAddCategory(e.target.value);
  };

  // console.log(localStorage.getItem("userId"));

  const handleClickCategory = async () => {
    handleCloseCat();
    // console.log(addCategory);
    try {
      const res = await fetch("http://localhost:8080/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          categoryName: addCategory,
          userId: localStorage.getItem("userId"),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }
      toast.success(data.message);

      // console.log(data)
    } catch (error: any) {
      toast.error(error.message);
    }
    fetchCategories();
  };
  const [showCat, setShowCat] = useState(false);

  const handleCloseCat = () => setShowCat(false);
  const handleShowCategory = () => setShowCat(true);
  const [showProd, setShowProd] = useState(false);

  const handleCloseProd = () => setShowProd(false);
  const handleShowProd = () => setShowProd(true);

  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:8080/category/all");

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }

      // console.log(data);
      setAllCategory(data); // Replace entire products array with fetched data
    } catch (error: any) {
      toast.error(error.message);
    }
  };


  const handleDeleteCategory= async(id:number)=>{
    try {
      const response = await fetch(`http://localhost:8080/category/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete category');
      }
      const data = await response.json();
      toast.success(data.message);
  
    } catch (error: any) {
      toast.error(error.message)
      
    }
    await fetchCategories();
    await fetchProducts();
    
  }
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:8080/product/all");

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error);
      }

      // console.log(data);
      setAllProduct(data); // Replace entire products array with fetched data
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  return (
    <section
      className="vendorDashboard mt-4  d-flex flex-column flex-wrap justify-content-center align-items-center"
      style={{ width: "100%" }}
    >
      <div
        className="w-50 d-flex justify-content-around align-items-center mt-5 p-2"
        style={{ minWidth: "300px" }}
      >
        <Button variant="success" className="p-3" onClick={handleShowCategory}>
          Add Category
        </Button>
        <Modal show={showCat} onHide={handleCloseCat}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Product Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Product Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Product category"
                  autoFocus
                  onChange={handleChangeCategory}
                  value={addCategory}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseCat}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClickCategory}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <Button variant="success" className="p-3" onClick={handleShowProd}>
          Add Product
        </Button>

        <Modal show={showProd} onHide={handleCloseProd}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Product </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Product Name"
                  autoFocus
                  name="productName"
                  onChange={handleChange}
                  value={createProduct.productName}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Product Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Product description"
                  autoFocus
                  name="description"
                  onChange={handleChange}
                  value={createProduct.description}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Product Price</Form.Label>
                <Form.Control
                  type="number"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  placeholder="Enter Product price"
                  autoFocus
                  name="price"
                  onChange={handleChange}
                  value={createProduct.price}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Product Quantity</Form.Label>
                <Form.Control
                  type="number"
                  inputMode="numeric"
                  pattern="[0-9]"
                  placeholder="Enter Product Quantity"
                  autoFocus
                  name="quantity"
                  onChange={handleChange}
                  value={createProduct.quantity}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="image">
                <Form.Label>Product Image</Form.Label>
                <Form.Control
                  type="file"
                  name="image"
                  onChange={handleFileChange}
                />
              </Form.Group>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  {selectedCategory
                    ? selectedCategory.categoryName
                    : "Select Category"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {allCategory.map((ele) => (
                    <Dropdown.Item
                      key={ele.id}
                      onClick={() => setSelectedCategory(ele)}
                    >
                      {ele.categoryName}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseProd}>
              Close
            </Button>
            <Button variant="primary" onClick={handleNewProduct}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="w-100 mt-5 d-flex justify-content-evenly align-items-center   flex-wrap p-5">
        <div className="categories text-center " style={{ minWidth: "300px",width: "500px"  }}>
          <h2 className="mt-2 bg-dark text-light p-2">All Categories</h2>
          <div className="border mt-3 p-3">
            {allCategory.map((ele) => (
              <p key={ele.id} className="d-flex justify-content-between align-items-center">
                {ele.categoryName} <span ><Button className="mx-5">Update</Button>
                <Button variant="danger" onClick={()=>handleDeleteCategory(ele.id)}>Delete</Button></span>
              </p>
            ))}
          </div>
        </div>
        <div className="products text-center " style={{ minWidth: "300px",width: "500px" }}>
          <h2 className="mt-2 bg-dark text-light p-2">All Products</h2>
          <div className="mt-2 border p-3 mt-3">
            {allProduct.map((ele)=> 
              // <p key={ele.id}>{ele.productName}</p>
              <img src={base64ToUrl(ele.imageFileBase64)} height={150} width={150} className="d-block justify-content-center align-items-center mx-auto"  style={{objectFit: "contain"}}/>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
