export interface Product {
  id: number;
  productName: string;
  price: number;
  description: string;
  image: string;
  stock: number;
  category: string;
}

export interface Category {
  id: number;
  categoryName: string;
}

export interface AllProducts {
  id: number;
  productName: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  category: string;
}

export interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  phoneNumber: number;
  password: string;
  username: string;
  profileImage?:any;
}
