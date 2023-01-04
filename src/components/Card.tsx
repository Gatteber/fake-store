type Props = {
  image: string;
  price: string;
  rating: string;
}

export default function Card({ image, price, rating }: Props) {
  return (
    <div>
        <div className="mt-5 mb-5 w-48 h-48 outline overflow-hidden rounded-md hover:outline-dotted cursor-pointer outline-stone-700 dark:outline-stone-50">
          <img src={image} alt=''></img>
        </div>
        <div className="flex flex-row justify-between">
          <div className="text-stone-700 dark:text-stone-50">
            ${price}
          </div>
          <div className="text-stone-700 dark:text-stone-50">
            {rating} &#9733;
          </div>
        </div>
    </div>
  )
}