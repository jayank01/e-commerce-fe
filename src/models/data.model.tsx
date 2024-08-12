export interface LoginData{
    username: string;
    password: string;
}

export interface UserData {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    phoneNumber: string;
    role: string;
}  

export type Cart={
    productId:number;
    productName:string;
    price:number;
    description:string;
    quantity:number
}