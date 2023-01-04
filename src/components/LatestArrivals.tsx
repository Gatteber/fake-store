import Card from "./Card"

type Props = {
    data: Array<any>;
}

export default function LatestArrivals({ data }: Props) {
  // if(data) console.log(data);
  return (
    <div className="mt-5 bg-stone-50 dark:bg-stone-700">
        <h2 className="text-center text-stone-700 dark:text-stone-50">Latest Arrivals</h2>
        <div className="flex flex-row gap-5 justify-around">
          {data.map(obj => 
          <Card 
            key={obj.id} 
            image={obj.image} 
            price={obj.price} 
            rating={obj.rating.rate} 
          />)}
        </div>
    </div>
  )
}

//         <div>
// <p>
// {data && JSON.stringify(data[0])}
// </p>
// </div>