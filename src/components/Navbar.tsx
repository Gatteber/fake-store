import StoreIcon from '../images/logo.svg'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <div className='flex text-stone-700 font-serif'>
        <div className='flex flex-initial justify-start items-center w-screen'>
            <img src={StoreIcon} 
            alt='store logo'
            className='logo-sizing'
            >
            </img>
            <span className=''
            >
                F.A.K.E | Wear your Dream
            </span>
        </div>
        <ul className='flex flex-row gap-3 items-center mr-4'>
            <li>Home</li>
            <li>Store</li>
            <li>About</li>
            <li>Cart</li>
        </ul>
    </div>
  )
}