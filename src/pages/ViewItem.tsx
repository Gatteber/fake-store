import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddtoCart from "../components/AddtoCart";
type Props = {}

export default function ViewItem({}: Props) {
  const [data, setData] = useState<any>({});
  const { id, } = useParams()
  const getRealId = id?.slice(1);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${getRealId}`)
    .then(response => response.json())
    .then(data => setData(data))
  },[getRealId])


  return (
    <>
    {data ? <div className="container grid grid-cols-2 gap-4 text-stone-700 dark:text-stone-50">
      <div className="item-image">
        <img 
        src={data.image} 
        alt={data.title}
        >
        </img>
      </div>
      <div className="item-body flex flex-col gap-5">
        <h3>
          {data.title}
        </h3>
        <p>
          Rated: {data.rating && data.rating.rate}/5 ({data.rating && data.rating.count})
        </p>
        <p>
          ${data.price}
        </p>
        <p>
          {data.description}
        </p>
        <div className="cart">
          <AddtoCart />
        </div>
        <div>
          -- Category: { data.category && data.category.toUpperCase()} --
        </div>
      </div>
    </div> : <div>Now Loading...</div>
    }
    </>
  )
}

//{"id":2,
//"title":"Mens Casual Premium Slim Fit T-Shirts ","
//price":22.3,
//"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category":"men's clothing",
//"image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//"rating":{"rate":4.1,"count":259}}