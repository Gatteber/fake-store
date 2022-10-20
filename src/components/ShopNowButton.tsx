import { Link } from 'react-router-dom';
type Props = {
    pageId: string;
    p?: string;
    pl?: string;
    pr?: string;
}

export default function ShopNowButton({ pageId, p, pl, pr }: Props) {
  return (
<Link to={`/${pageId}`}>
    <button className={`bg-stone-700 rounded-md ${p} ${pl} ${pr} text-stone-50 font-bold transition duration-200  
                    dark:bg-stone-50 dark:text-stone-700 hover:bg-stone-400 dark:hover:bg-stone-400`}
    >
        Shop Now!
    </button>
</Link>
  )
}

// p-5 pl-8 pr-8