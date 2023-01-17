type Props = {}

export default function AddtoCart({}: Props) {
  return (
    <div className="flex gap-2 items-center justify-between outline p-3 outline-stone-700 dark:outline-stone-50">
        Quantity: 0
        <button className={`bg-stone-700 rounded-md p-2 text-stone-50 font-bold transition duration-200  
                    dark:bg-stone-50 dark:text-stone-700 hover:bg-stone-400 dark:hover:bg-stone-400`}
    >
        Add to Cart
    </button>
    </div>
  )
}