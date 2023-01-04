import { AiFillGithub } from 'react-icons/ai';

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className="pt-5 flex justify-center items-center bg-stone-50 dark:bg-stone-700 text-stone-700 dark:text-stone-50">
      <a href="https://github.com/Gatteber" className='flex justify-center items-center'>
        <p className=''>Made in 2022 by Gatteber</p>
          <AiFillGithub />
      </a>
    </div>
  )
}