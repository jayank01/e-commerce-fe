
import toast from "react-hot-toast";

export const useCartController = () => {
  

  const addCartApi = async (productId: any) => {
    try {
      const user: any = localStorage.getItem("userId");
      const queryParams = new URLSearchParams({
        userId: user,
        productId: productId,
      });
      const res = await fetch(
        `http://localhost:8080/cart/add?${queryParams.toString()}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }
      toast.success(data.message);
    } catch (error: any) {
      toast.error(error.message);
    }
  };


  return {
    addCartApi
  };
};
