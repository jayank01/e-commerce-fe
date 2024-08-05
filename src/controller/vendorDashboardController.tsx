// import { useState } from "react";
// import { AllProducts, Category, Product } from "../models/Interfaces";
// import toast from "react-hot-toast";

// export const vendorDashboardController = () => {
//     const [addCategory, setAddCategory] = useState("");
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);

//   const [allCategory, setAllCategory] = useState<Category[]>([]);
//   const [allProduct, setAllProduct] = useState<AllProducts[]>([]);
//   // console.log(allCategory)
//   // console.log(allProduct)
//   const [selectedCategory, setSelectedCategory] = useState<Category | null>(
//     null
//   );
//   const [showCatUp, setShowCatUp] = useState(false);

//   const [createProduct, setCreateProduct] = useState<Product>({
//     productName: "",
//     description: "",
//     price: 0,
//     quantity: 0,
//   });

//   const handleChange = (e: { target: { name: string; value: string } }) => {
//     let { name, value } = e.target;

//     setCreateProduct((pre) => {
//       return { ...pre, [name]: value };
//     });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0] || null;
//     setSelectedFile(file);
//   };
//   // console.log(selectedFile)

//   const handleNewProduct = async () => {
//     // const dataToSend = {...createProduct,stock: "In stock",photo: selectedFile.name}
//     const formData = new FormData();
//     // Append fields from createProduct
//     formData.append("productName", createProduct.productName);
//     formData.append("description", createProduct.description);
//     formData.append("price", createProduct.price.toString());
//     formData.append("stock", createProduct.quantity.toString());
//     // Append additional fields
//     formData.append("category", `${selectedCategory?.categoryName}`);
//     // formData.append("stock", "Instock");

//     // Append the image file if selected
//     if (selectedFile) {
//       formData.append("photo", selectedFile);
//     }

//     formData.forEach((value, key) => {
//       console.log(`${key}:`, value);
//     });

//     setShowProd(false);
//     // console.log(dataToSend);

//     try {
//       const res = await fetch(
//         `http://localhost:8080/product/${localStorage.getItem("userId")}`,
//         {
//           method: "POST",
//           body: formData,
//         }
//       );
//       const data = await res.json();
//       console.log(data);
//       if (!res.ok) {
//         throw new Error(data.message);
//       }
//       toast.success("Product Added Successfully");

//       // console.log(data)
//     } catch (error: any) {
//       // console.log(error);
//       toast.error(error.message);
//     }
//     fetchProducts();
//   };

//   const handleChangeCategory = (e: any) => {
//     setAddCategory(e.target.value);
//   };

//   // console.log(localStorage.getItem("userId"));

//   const handleClickCategoryUpdate = async () => {
//     handleShowCategoryup();
//     try {
//       const res = await fetch(
//         `http://localhost:8080/category/${localStorage.getItem("userId")}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             categoryName: addCategory,
//           }),
//         }
//       );
//       const data = await res.json();
//       console.log(data);
//       if (!res.ok) {
//         throw new Error("Failed to edit category");
//       }
//       toast.success("Category updated successfully");

//       // console.log(data)
//     } catch (error: any) {
//       toast.error(error.message);
//     }
//     await fetchCategories();
//     handleCloseCatup();
//   };

//   const handleClickCategory = async () => {
//     handleCloseCat();
//     // console.log(addCategory);
//     try {
//       const res = await fetch(
//         `http://localhost:8080/category/${localStorage.getItem("userId")}`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             categoryName: addCategory,
//           }),
//         }
//       );
//       const data = await res.json();
//       console.log(data);
//       if (!res.ok) {
//         throw new Error("Failed to create successfully");
//       }
//       toast.success("Category added successfully");

//       // console.log(data)
//     } catch (error: any) {
//       toast.error(error.message);
//     }
//     await fetchCategories();
//   };
//   const [showCat, setShowCat] = useState(false);

//   const handleCloseCat = () => setShowCat(false);
//   const handleShowCategory = () => setShowCat(true);
//   const [showProd, setShowProd] = useState(false);
//   const handleCloseCatup = () => setShowCatUp(false);
//   const handleShowCategoryup = () => setShowCatUp(true);

//   const handleCloseProd = () => setShowProd(false);
//   const handleShowProd = () => setShowProd(true);

//   const fetchCategories = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:8080/category/${localStorage.getItem("userId")}`
//       );

//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.message);
//       }

//       // console.log(data);
//       setAllCategory(data); // Replace entire products array with fetched data
//     } catch (error: any) {
//       toast.error(error.message);
//     }
//   };

//   const handleDeleteCategory = async (id: number) => {
//     try {
//       const response = await fetch(`http://localhost:8080/category/${id}`, {
//         method: "DELETE",
//       });

//       // const errorData = await response.json();
//       if (!response.ok) {
//         throw new Error("Failed to delete category");
//       }
//       // const data = await response.json();
//       toast.success("Category deleted successfully");
//     } catch (error: any) {
//       toast.error(error.message);
//     }
//     await fetchCategories();
//     await fetchProducts();
//   };
//   const fetchProducts = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:8080/product/${localStorage.getItem("userId")}`
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error);
//       }

//       // console.log(data);
//       setAllProduct(data); // Replace entire products array with fetched data
//     } catch (error: any) {
//       toast.error(error.message);
//     }
//   };
    
//   return {
//     handleChangeCategory,
//     handleDeleteCategory,
//     allCategory,
//     allProduct,
//     fetchCategories,
//     fetchProducts,
//     handleClickCategoryUpdate,
//     handleShowCategory,
//     handleShowCategoryup,
//     handleCloseCat,
//     handleCloseCatup,
//     showCat,
//     showCatUp,
//     showProd,
//     handleShowProd,
//     handleCloseProd,
//     setSelectedCategory,
//     selectedFile,
//     handleChange,
//     handleFileChange,
//     handleNewProduct,
//     handleClickCategory
//   }
// }

