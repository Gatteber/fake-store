import { useEffect, useState } from "react"
import CartComponent from "../components/CartComponent"
import ShopNowButton from "../components/ShopNowButton"

type Props = {
  cartItems: any
  setCartItems: any
}

const shipping =  20
const getSubtotal = (cartItems: any) => {
  let total = 0
  for (let i = 0; i < cartItems.length; i++) {
    total += cartItems[i].quantity * Number(cartItems[i].price)
  }
  return total
}
const calculateTax = (subtotal: number) => {
  const result = subtotal * 0.1
  const tax = result.toFixed(2)
  return tax
}
const calculateTotal = (subtotal: number, tax: any, shipping: number) => {
  let total = Number(subtotal) + Number(tax) + Number(shipping)
  return total
}
export default function ViewCart({cartItems, setCartItems}: Props) {
  const [showCart, setShowcart] = useState(false)
  useEffect(() => {
    setShowcart(false)
    if (cartItems.length > 0) {
      setShowcart(true)
    }
  },[cartItems])


  return (
    <div>
      <h3 className="text-stone-700 text-xl font-bold text-center dark:text-stone-50">Review your cart</h3>
      {showCart ?
      <>
      <CartComponent cartItems={cartItems} setCartItems={setCartItems} />
        <div className="flex justify-between p-10">
          <div className="total-box dark:text-stone-50">
            <p>Subtotal: ${getSubtotal(cartItems)}</p>
            <p>Tax: ${calculateTax(getSubtotal(cartItems))}</p>
            <p>Shipping: ${shipping.toFixed(2)}</p>
            <p>Total:${calculateTotal(getSubtotal(cartItems), calculateTax(getSubtotal(cartItems)), shipping)} </p>
          </div>
          <div className="flex items-center">
            <button className="bg-stone-700 text-stone-50 p-2 rounded-md transition duration-200 dark:bg-stone-50 dark:text-stone-700 hover:bg-stone-400 dark:hover:bg-stone-400">Checkout! (Currently disabled)</button>
          </div>
        </div>
      </>
      : <div className="flex flex-1 items-center justify-center p-5 gap-5 dark:text-stone-50">Nothing yet. <ShopNowButton pageId='store' p='p-2' pl='pl-8' pr='pr-8' /></div>}
    </div>
  )
}