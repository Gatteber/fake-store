type Props = {
    cartItems: any
    setCartItems: any
}

export default function CartComponent({cartItems, setCartItems}: Props) {
    const handleRemove = (deletedItem: any) => {
        const newCart = cartItems.filter((cartItem: any) => cartItem.imageID !== deletedItem)
        setCartItems(newCart)
    }
  return (
    <div className="container flex flex-col gap-2">
    {cartItems.map((item: any) => 
      <div className="flex flex-1 outline outline-1 gap-4 items-center justify-between m-2 dark:outline-stone-50 dark:text-stone-50">
        <div className="pl-5">
          <img className="w-16 h-16" src={item.image} alt="#" />
        </div>
        <div className="flex flex-col gap-2">
          <div>Name: {item.name}</div>
          <div>Price: {item.price}</div>
          <div>Quantity: {item.quantity}</div>
        </div>
        <div className="items-center pr-5">
          <button className="bg-stone-700 text-stone-50 p-2 rounded-md transition duration-200 dark:bg-stone-50 dark:text-stone-700 hover:bg-stone-400 dark:hover:bg-stone-400" onClick={()=>(handleRemove(item.imageID))}>Remove</button>
        </div>
      </div>
    )}
  </div>
  )
}