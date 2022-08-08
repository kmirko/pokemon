import styles from '../styles/Layout.module.css'
import Footer from './Footer'
import Header from './Header'

export default function Layout({children}){
    return(
        <div className='grid grid-cols-2 gap-5 text-center'>
            <div className='col-span-2'>
            <Header />
            </div>
            <div className='col-span-2'>{children}</div>
            <div className='col-span-2'>
            <Footer/>
            </div>
        </div>
    )
}