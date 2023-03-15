import { useNavigate } from "react-router-dom";


type Props = {
  quantity: number,
  setQuantity: any,
  cartItems: any,
  setCartItems: any,
  name: any,
  price:any,
  imageID: any,
  image: any,
}

export default function AddtoCart({ quantity, setQuantity, cartItems, setCartItems, name, price, imageID, image }: Props) {
  let navigate = useNavigate();
  const handleDecrement = (quantity: number) => {
    if (quantity <= 1)
    return
    setQuantity(quantity-1)
  }
  const handleIncrement = (quantity: number) => {
    setQuantity(quantity +1)
  }
  const handleSubmit = (quantity: any, name: any, price: any) => {
    const newCartItem = {
      name: name,
      price: price,
      quantity: quantity,
      imageID: imageID,
      image: image,
    }
    setCartItems([...cartItems, newCartItem])
    navigate('/view-cart');
  }
  return (
    <div className="flex gap-2 items-center justify-between outline p-3 outline-stone-700 dark:outline-stone-50">
      <div className="buttonbox flex gap-2 items-center">
        <button className="remove bg-stone-700 text-stone-50 p-2 rounded-md transition duration-200 dark:bg-stone-50 dark:text-stone-700 hover:bg-stone-400 dark:hover:bg-stone-400" onClick={()=>handleDecrement(quantity)}>
          -
        </button>
          <div>Quantity: {quantity}</div>
          <button className="add bg-stone-700 text-stone-50 p-2 rounded-md transition duration-200 dark:bg-stone-50 dark:text-stone-700 hover:bg-stone-400 dark:hover:bg-stone-400" onClick={()=>handleIncrement(quantity)}>
            +
          </button>
        </div>
        <button 
          className={`bg-stone-700 rounded-md p-2 text-stone-50 font-bold transition duration-200  
                    dark:bg-stone-50 dark:text-stone-700 hover:bg-stone-400 dark:hover:bg-stone-400`}
          onClick={()=>handleSubmit(quantity, name, price)}
        >
        Add to Cart
    </button>
    </div>
  )
}