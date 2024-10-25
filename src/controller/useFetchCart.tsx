import { useCallback, useState } from "react";
import { Cart } from "../models/data.model";
import toast from "react-hot-toast";


export const useFetchCart = () => {
    const [cartItems,setCartItems] = useState<Cart[]>([]);
    const fetchCart = useCallback(async()=>{
        try{
            const response = await fetch(`http://localhost:8080/cart/${localStorage.getItem('userId')}`)
            const data = await response.json();
            if(!response.ok){
                throw new Error(data.message)
            }
            setCartItems(data)
        }catch(error:any){
            toast.error(error.message)
        }
        
    },[])
  return {
    cartItems,
    fetchCart
  }
}

