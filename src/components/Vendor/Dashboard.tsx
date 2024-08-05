import { useEffect, useState } from "react";
import { Dropdown, Form, Modal, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import toast from "react-hot-toast";
import { AllProducts, Category } from "../../models/Interfaces";
import { base64ToUrl } from "../../utils/base64ToUrl";
import CreateCategory from "./Modals/CreateCategory";
import UpdateProduct from "./Modals/UpdateProduct";

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
  // console.log(allProduct)
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [showCatUp, setShowCatUp] = useState(false);
  const [showProdUp, setShowProdUp] = useState(false);
  const [productId, setProductId] = useState(Number);
  const handleCloseProdUp = () => setShowProdUp(false);
  const handleShowProdUp = (id: number) => {
    setShowProdUp(true);
    setProductId(id);
  };

  // const [updatedProduct,setUpdatedProduct] = useState<Product>();

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
    // const dataToSend = {...createProduct,stock: "In stock",photo: selectedFile.name}
    const formData = new FormData();
    // Append fields from createProduct
    formData.append("productName", createProduct.productName);
    formData.append("description", createProduct.description);
    formData.append("price", createProduct.price.toString());
    formData.append("stock", createProduct.quantity.toString());
    // Append additional fields
    formData.append("category", `${selectedCategory?.categoryName}`);
    // formData.append("stock", "Instock");

    // Append the image file if selected
    if (selectedFile) {
      formData.append("photo", selectedFile);
    }

    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });

    setShowProd(false);
    // console.log(dataToSend);

    try {
      const res = await fetch(
        `http://localhost:8080/product/${localStorage.getItem("userId")}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        throw new Error(data.message);
      }
      toast.success("Product Added Successfully");

      // console.log(data)
    } catch (error: any) {
      // console.log(error);
      toast.error(error.message);
    }
    fetchProducts();
  };

  const handleProductUp = async () => {
    if (!productId) {
      return;
    }
    // const dataToSend = {...createProduct,stock: "In stock",photo: selectedFile.name}
    const formData = new FormData();
    // Append fields from createProduct
    formData.append("productName", createProduct.productName);
    formData.append("description", createProduct.description);
    formData.append("price", createProduct.price.toString());
    formData.append("stock", createProduct.quantity.toString());
    // Append additional fields
    formData.append("category", `${selectedCategory?.categoryName}`);
    // formData.append("stock", "Instock");

    // Append the image file if selected
    if (selectedFile) {
      formData.append("photo", selectedFile);
    }

    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });

    setShowProd(false);
    // console.log(dataToSend);

    try {
      const res = await fetch(`http://localhost:8080/product/${productId}`, {
        method: "PUT",
        body: formData,
      });
      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        throw new Error(data.message);
      }
      toast.success("Product Updated Successfully");
      handleCloseProdUp();

      // console.log(data)
    } catch (error: any) {
      // console.log(error);
      toast.error(error.message);
    }
    fetchProducts();
  };

  const handleChangeCategory = (e: any) => {
    setAddCategory(e.target.value);
  };

  // console.log(localStorage.getItem("userId"));

  const handleClickCategoryUpdate = async () => {
    handleShowCategoryup();
    try {
      const res = await fetch(
        `http://localhost:8080/category/${localStorage.getItem("userId")}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            categoryName: addCategory,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        throw new Error("Failed to edit category");
      }
      toast.success("Category updated successfully");

      // console.log(data)
    } catch (error: any) {
      toast.error(error.message);
    }
    await fetchCategories();
    handleCloseCatup();
  };

  const handleClickCategory = async () => {
    handleCloseCat();
    // console.log(addCategory);
    try {
      const res = await fetch(
        `http://localhost:8080/category/${localStorage.getItem("userId")}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            categoryName: addCategory,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        throw new Error("Failed to create successfully");
      }
      toast.success("Category added successfully");

      // console.log(data)
    } catch (error: any) {
      toast.error(error.message);
    }
    await fetchCategories();
  };
  const [showCat, setShowCat] = useState(false);

  const handleCloseCat = () => setShowCat(false);
  const handleShowCategory = () => setShowCat(true);
  const [showProd, setShowProd] = useState(false);
  const handleCloseCatup = () => setShowCatUp(false);
  const handleShowCategoryup = () => setShowCatUp(true);

  const handleCloseProd = () => setShowProd(false);
  const handleShowProd = () => setShowProd(true);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/category/${localStorage.getItem("userId")}`
      );

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

  const handleDeleteProduct = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:8080/product/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete category");
      }

      toast.success("Product deleted successfully");
    } catch (error: any) {
      toast.error(error.message);
    }
    await fetchProducts();
  };

  const handleDeleteCategory = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:8080/category/${id}`, {
        method: "DELETE",
      });

      // const errorData = await response.json();
      if (!response.ok) {
        throw new Error("Failed to delete category");
      }
      // const data = await response.json();
      toast.success("Category deleted successfully");
    } catch (error: any) {
      toast.error(error.message);
    }
    await fetchCategories();
    await fetchProducts();
  };
  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/product/${localStorage.getItem("userId")}`
      );

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
      className="vendorDashboard mt-4  d-flex  flex-wrap justify-content-end align-items-center"
      style={{ width: "100%" }}
    >
      <div
        className="w-50   mt- p-2 d-flex justify-content-end "
        style={{ minWidth: "300px", marginRight: "15px" }}
      >
        <Button
          variant="success"
          className="p-3 mx-3 d-inline-block"
          onClick={handleShowCategory}
        >
          Add Category
        </Button>

        <CreateCategory
          showCat={showCat}
          handleCloseCat={handleCloseCat}
          handleChangeCategory={handleChangeCategory}
          addCategory={addCategory}
          handleClickCategory={handleClickCategory}
        />

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

        <Modal show={showCatUp} onHide={handleCloseCatup}>
          <Modal.Header closeButton>
            <Modal.Title>Update Product Category</Modal.Title>
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
                  placeholder="Enter new Product category"
                  autoFocus
                  onChange={handleChangeCategory}
                  value={addCategory}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseCatup}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClickCategoryUpdate}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <UpdateProduct
          showProdUp={showProdUp}
          handleCloseProdUp={handleCloseProdUp}
          createProduct={createProduct}
          handleChange={handleChange}
          handleFileChange={handleFileChange}
          selectedFile={selectedFile}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          allCategory={allCategory}
          handleProductUp={handleProductUp}
        />
      </div>

      <div className="w-100 mt-5 r  p-2">
        <div className="categories text-center " style={{ minWidth: "300px" }}>
          <h2 className="mt-2 bg-dark text-light p-2">All Categories</h2>
          <div className=" mt-3">
            <Table responsive>
              <thead>
                <tr className="text-center align-middle">
                  <th>Sr No</th>
                  <th>Category Name</th>
                  <th>Category Id</th>
                </tr>
              </thead>
              <tbody>
                {allCategory.map((ele, index) => (
                  <tr key={ele.id} className="text-center align-middle">
                    <td>{index + 1}</td>
                    <td>{ele.categoryName}</td>
                    <td>{ele.id}</td>
                    <td>
                      <Button variant="primary" onClick={handleShowCategoryup}>
                        Update
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleDeleteCategory(ele.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
        <div
          className="products text-center mt-5"
          style={{ minWidth: "300px" }}
        >
          <h2 className="mt-2 bg-dark text-light p-2">All Products</h2>
          <div className="mt-3 ">
            <Table responsive>
              <thead>
                <tr className="text-center align-middle">
                  <th>Sr No</th>
                  <th>Product Name</th>
                  <th>Product Description</th>
                  <th>Product Price</th>
                  <th>Product Image</th>
                  <th>Product Stock</th>
                </tr>
              </thead>
              <tbody>
                {allProduct.map((ele, index) => (
                  <tr key={ele.id} className="text-center align-middle">
                    <td>{index + 1}</td>
                    <td>{ele.productName}</td>
                    <td>{ele.description}</td>
                    <td>{ele.price}</td>
                    <td>
                      <img
                        src={base64ToUrl(ele.image)}
                        className="image-scale d-block mx-auto"
                        style={{ height: "50px", width: "50px" }}
                      />
                    </td>
                    <td>{ele.stock}</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={() => handleShowProdUp(ele.id)}
                      >
                        Update
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleDeleteProduct(ele.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
