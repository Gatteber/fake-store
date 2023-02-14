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
  return (
    <div>
      <h3 className="text-stone-700 text-xl font-bold text-center">Review your cart</h3>
      <div className="container flex flex-col gap-2">
        {cartItems && cartItems.map((item: any) => 
          <div className="flex flex-1 outline outline-1 gap-4 items-center justify-between m-2">
            <div className="pl-5">
              Here is the picture
            </div>
            <div className="flex flex-col gap-2">
              <div>Name: {item.name}</div>
              <div>Price: {item.price}</div>
              <div>Quantity: {item.quantity}</div>
            </div>
            <div className="items-center pr-5">
              <button className="bg-stone-700 text-stone-50 p-2 rounded-md transition duration-200 dark:bg-stone-50 dark:text-stone-700 hover:bg-stone-400 dark:hover:bg-stone-400">Remove</button>
            </div>
          </div>
        )
        }
      </div>
      <div className="flex justify-between p-10">
        <div className="total-box">
          <p>Subtotal: ${getSubtotal(cartItems)}</p>
          <p>Tax: ${calculateTax(getSubtotal(cartItems))}</p>
          <p>Shipping: ${shipping.toFixed(2)}</p>
          <p>Total:${calculateTotal(getSubtotal(cartItems), calculateTax(getSubtotal(cartItems)), shipping)} </p>
        </div>
        <div className="flex items-center">
          <button className="bg-stone-700 text-stone-50 p-2 rounded-md transition duration-200 dark:bg-stone-50 dark:text-stone-700 hover:bg-stone-400 dark:hover:bg-stone-400">Checkout! (Currently disabled)</button>
        </div>
      </div>
    </div>
  )
}