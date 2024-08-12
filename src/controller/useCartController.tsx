import { useState } from "react"
import { Product } from "../models/Interfaces";
import toast from "react-hot-toast";

export const useCartController = () => {

    const [cartItems,setCartItems] = useState<Product[]>([]);
    const handleAddToCart=(data:Product)=>{
        setCartItems(prev=> [...prev,data])
        addCartApi(data.id);
    }

    const addCartApi =async(productId:any)=>{
      try{
        const user:any = localStorage.getItem('userId');
        const queryParams = new URLSearchParams({
          userId: user,
          productId: productId
        });
        const res = await fetch(`http://localhost:8080/cart/add?${queryParams.toString()}`,{
          method: "POST",
          headers:{
            "Content-Type": "application/json",
          }
          
        })
        const data = await res.json();
        if(!res.ok){
          throw new Error(data.message)
        }
        toast.success(data.message)
      }catch(error:any){
        toast.error(error.message)
      }
    }
    const handleRemove=async(id:any)=>{
      try{
          const res = await fetch(`http://localhost:8080/cart/remove/${localStorage.getItem('userId')}/${id}`,{
              method:'DELETE',
          });

          const data = await res.json();

          if(!res.ok){
              throw new Error(data.message)
          }

          toast.success(data.message)
      }catch(err:any){
          toast.error(err.message)
      }

  }
  return {
    handleAddToCart,
    cartItems,
    handleRemove
  }
}

