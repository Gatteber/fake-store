import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HeaderImage from "../components/HeaderImage"
import LatestArrivals from '../components/LatestArrivals';
import ShopNowButton from '../components/ShopNowButton';

type Props = {}

export default function Home({}: Props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/?limit=4')
    .then(response => response.json())
    .then(data => setData(data));
  },[])

  return (
    <div className=''>
      <HeaderImage />
      <div className='flex mt-4 justify-around text-stone-700 dark:text-stone-50'>
        <div className='flex flex-col gap-3 ml-2'>
          <div>
             <h2 className='text-center text-xl font-bold'>What is F.A.K.E?</h2>
            </div>
            <div>
              <p>Fashionable. Get the latest trends, before others know.</p>
            </div>
            <div>
              <p>Affordable. Direct to customers makes it easy to keep prices low.</p>
            </div>
            <div>
              <p>Knowledgable. Staff members can assist finding the perfect fit for you.</p>
            </div>
            <div>
              <p>Economical. Prices that won't break the bank. We've got your back.</p>
            </div>
          </div>
          <div className='flex flex-col justify-around'>
            <div className=''>The trends don't get slower.</div>
            <ShopNowButton pageId='store' p='p-5' pl='pl-8' pr='pr-8' />
          </div>
      </div>
      <LatestArrivals data={data} />
      <div>
      </div>
    </div>
  )
}