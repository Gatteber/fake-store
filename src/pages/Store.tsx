import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Card from '../components/Card';

type Props = {}


export default function Store({}: Props) {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setData(data));
  },[])
  return (
    <div className='bg-stone-50 dark:bg-stone-700'>
              <div className="w-screen grid grid-cols-2 gap-4 items-center">
          {data && data.map((obj: any) =>
          <Link
          to={`/view-item/:${obj.id}`}
          >
            <Card 
              key={obj.id} 
              image={obj.image} 
              price={obj.price} 
              rating={obj.rating.rate}
            />
          </Link> 
          )}
        </div>
    </div>
  )
}