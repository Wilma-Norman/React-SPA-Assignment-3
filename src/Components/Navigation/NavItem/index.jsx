import styles from './navItem.module.css'    

const NavItem = ({title, isAcitve, updateFunction}) => {          //promts med {title} och {title} i diven
    const handleClick = () => {
        updateFunction(title)
    }
    return (
        <div className={styles.navItem}>
            <div className={ isAcitve === title ? styles.active : ''} onClick={handleClick}>
                {title}
            </div>
        </div>
    )
}

export default NavItem 


/*import styles from './navItem.module.css'

const NavItem = ({category}) => {
    return <a className={styles.navItem} href="#">{category}</a>
}

export default NavItem;
*/