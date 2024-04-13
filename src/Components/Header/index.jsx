import styles from './Header.module.css'

const Header = () => {
    return(
        <header className={styles.pageTitle}>
            <h1>Wilmas Page</h1>
            <h3>About Wilma</h3>
        </header>
    )
}

export default Header