import EmptyCartImg from '../../assets/empty-cart.avif'
const EmptyCart = () => {
  return (
    <div>
        <img src={EmptyCartImg} alt="Empty cart" width={"350px"} height={"300px"} />
        <h2 className='text-center mt-2'>Add Items To See In Cart</h2>
    </div>
  )
}

export default EmptyCart