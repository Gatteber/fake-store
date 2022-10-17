import { BsFillSunFill, BsMoonFill} from "react-icons/bs";
import useDarkMode from '../hooks/useDarkMode';

type Props = {}


export default function ThemeSwitcher({}: Props) {
const [colorTheme, setTheme ] = useDarkMode();

  return (
    <div onClick={() => setTheme(colorTheme)} className='cursor-pointer'>
    {colorTheme === 'dark' ? <BsFillSunFill /> : <BsMoonFill /> }
    </div>
  )
}