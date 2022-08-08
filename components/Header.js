import Link from 'next/link'

export default function Header(){
    return(
        <header className='bg-blue-500 h-12 flex justify-between'>
            <div className='px-10 py-2'>
                <Link href='/'>HOME PAGE</Link>
            </div>
            <ul className='flex'>
                <li className='px-10 py-2'>
                    <Link href='/about'>about</Link>
                </li>
                <li className='px-10 py-2'>
                    <Link href='/coment'>comment</Link>
                </li>
            </ul>
        </header>
    )
}