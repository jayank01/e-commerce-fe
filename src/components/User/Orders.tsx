import { Button } from "react-bootstrap"


const Orders = () => {
  return (
    <div className="w-100 d-flex flex-column justify-content-center align-items-center">
        <div className="w-50 text-center heading mt-4 border p-2 bg-danger text-light rounded">
            <h1>My Cart</h1>
        </div>
        <div className="orderslist w-50 text-center heading mt-4 border p-2  rounded">
                <div className="products d-flex justify-content-around align-items-center">
                    <h5>Iphone 15</h5>
                    <p>Price: 1000$</p>
                    <div className="d-flex justify-content-center gap-2 align-items-center">
                    <Button variant="secondary">+</Button>
                    <p className="my-auto">1</p>
                    <Button variant="secondary">-</Button>
                    </div>
                </div>
                <div className="products d-flex justify-content-around align-items-center">
                    <h5>Iphone 15</h5>
                    <p>Price: 1000$</p>
                    <div className="d-flex justify-content-center gap-2 align-items-center">
                    <Button variant="secondary">+</Button>
                    <p className="my-auto">1</p>
                    <Button variant="secondary">-</Button>
                    </div>
                </div>
                <div className="products d-flex justify-content-around align-items-center">
                    <h5>Iphone 15</h5>
                    <p>Price: 1000$</p>
                    <div className="d-flex justify-content-center gap-2 align-items-center">
                    <Button variant="secondary">+</Button>
                    <p className="my-auto">1</p>
                    <Button variant="secondary">-</Button>
                    </div>
                </div>
                <div className="products d-flex justify-content-around align-items-center">
                    <h5>Iphone 15</h5>
                    <p>Price: 1000$</p>
                    <div className="d-flex justify-content-center gap-2 align-items-center">
                    <Button variant="secondary">+</Button>
                    <p className="my-auto">1</p>
                    <Button variant="secondary">-</Button>
                    </div>
                </div>
                <div className="products d-flex justify-content-around align-items-center">
                    <h5>Iphone 15</h5>
                    <p>Price: 1000$</p>
                    <div className="d-flex justify-content-center gap-2 align-items-center">
                    <Button variant="secondary">+</Button>
                    <p className="my-auto">1</p>
                    <Button variant="secondary">-</Button>
                    </div>
                </div>
                <div className="products d-flex justify-content-around align-items-center">
                    <h5>Iphone 15</h5>
                    <p>Price: 1000$</p>
                    <div className="d-flex justify-content-center gap-2 align-items-center">
                    <Button variant="secondary">+</Button>
                    <p className="my-auto">1</p>
                    <Button variant="secondary">-</Button>
                    </div>
                </div>
                <div className="products d-flex justify-content-around align-items-center">
                    <h5>Iphone 15</h5>
                    <p>Price: 1000$</p>
                    <div className="d-flex justify-content-center gap-2 align-items-center">
                    <Button variant="secondary">+</Button>
                    <p className="my-auto">1</p>
                    <Button variant="secondary">-</Button>
                    </div>
                </div>
                <div className="products d-flex justify-content-around align-items-center">
                    <h5>Iphone 15</h5>
                    <p>Price: 1000$</p>
                    <div className="d-flex justify-content-center gap-2 align-items-center">
                    <Button variant="secondary">+</Button>
                    <p className="my-auto">1</p>
                    <Button variant="secondary">-</Button>
                    </div>
                </div>
                <div className="products d-flex justify-content-around align-items-center">
                    <h5>Iphone 15</h5>
                    <p>Price: 1000$</p>
                    <div className="d-flex justify-content-center gap-2 align-items-center">
                    <Button variant="secondary">+</Button>
                    <p className="my-auto">1</p>
                    <Button variant="secondary">-</Button>
                    </div>
                </div>
        </div>
        <div className="total w-50 d-flex justify-content-between align-items-center text-center heading mt-4 bg-dark text-light p-2  rounded ">
            <h5 className="my-auto">Total: 9000$</h5>
            <Button className="btn btn-success">Checkout</Button>
        </div>
    </div>
  )
}

export default Orders