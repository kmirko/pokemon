import styles from '../styles/Layout.module.css'

export default function Layout({children}){
    return(
        <div className={styles.container}>

            <h1>Layout</h1>
            <div>{children}</div>
        </div>
    )
}