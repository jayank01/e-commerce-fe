import { Button, Table } from "react-bootstrap";
import { useEffect } from "react";
import { FaTrash } from "react-icons/fa6";
import EmptyCart from "./EmptyCart";
import toast from "react-hot-toast";
import { useFetchCart } from "../../controller/useFetchCart";


const Orders = () => {
 const {cartItems,fetchCart} = useFetchCart()

  const total = cartItems?.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  const handleRemove = async (id: any) => {
    try {
      const res = await fetch(
        `http://localhost:8080/cart/remove/${localStorage.getItem(
          "userId"
        )}/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      toast.success(data.message);
    } catch (err: any) {
      toast.error(err.message);
    }
     await fetchCart()
  };

  useEffect(() => {
    fetchCart();
  }, []);
  return (
    <div className="w-100 d-flex flex-column justify-content-center align-items-center">
      <div className="w-50 text-center heading mt-4 border p-2 bg-danger text-light rounded">
        <h1>My Cart</h1>
      </div>
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div className="orderslist w-50 text-center heading mt-4 border p-1  rounded ">
            <Table>
              <thead>
                <tr
                  className="text-center align-middle"
                  style={{ fontSize: "20px" }}
                >
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems?.map((ele) => {
                  return (
                    <tr
                      key={ele.productId}
                      className="text-center align-middle"
                    >
                      <td>{ele.productName}</td>
                      <td>{ele.price}</td>
                      <td>{ele.quantity}</td>
                      <td>
                        <Button
                          variant="danger"
                          onClick={() => handleRemove(ele.productId)}
                        >
                          <FaTrash />
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          <div className="total w-50 d-flex justify-content-between align-items-center text-center heading mt-4 bg-dark text-light p-2  rounded ">
            <h5 className="my-auto">Total:Rs {total}</h5>
            <Button className="btn btn-success">Checkout</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;
