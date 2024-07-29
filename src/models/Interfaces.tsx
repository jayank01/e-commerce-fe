export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export interface Category {
    id: number;
    categoryName: string;
  }

export  interface AllProducts {
    id: number;
    productName: string;
    description: string;
    price: number;
    quantity: number;
    imageFileBase64: string;
    stock: string;
    category: {
      id: number;
      categoryName: string;
      userId: number;
    };
  }