import { Link } from 'react-router-dom';
import StoreIcon from '../images/logo.svg'
import ThemeSwitcher from './ThemeSwitcher'
import { useEffect, useState } from 'react';

type Props = {}

export default function Navbar({}: Props) {
    const [cart, setCart] = useState<object[]>([])
    const item: object = {
        name: "Men's Shirt",
        price: 15.00,
        quantity: 1,
    }
    const handleCart = useEffect(() => {
        setCart([...cart, item])
        setCart([...cart, item])
        setCart([...cart, item])
    },[])
  return (
    <div className='flex text-stone-700 font-serif dark:text-stone-50'>
        <div className='flex flex-initial justify-start items-center w-screen'>
            <img src={StoreIcon} 
            alt='store logo'
            className='logo-sizing dark:invert'
            >
            </img>
            <span className=''
            >
                F.A.K.E | Wear your Dream
            </span>
        </div>
        <ul className='flex flex-row gap-3 items-center mr-4'>
            <ThemeSwitcher />
            <li>
                <Link 
                to={"/"}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                to={"/store"}
                >
                    Store
                </Link>
            </li>
            <li>
                <Link
                to={"/about"}
                >
                    About
                </Link>
            </li>
            <li>
                <Link
                to={"/view-cart"}
                >
                    Cart({cart ? cart.length : 0})
                </Link>
            </li>
        </ul>
    </div>
  )
}