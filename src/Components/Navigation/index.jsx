import NavItem from "./NavItem"
import styles from './Nav.module.css'

const Nav = ({navActive, navaSetActive}) => {
    // const [active, setActive] = useState("Home");           //state och där nere
 
     return (
         <nav className={styles.navigation}>
             <NavItem title="Home" isAcitve={navActive} updateFunction={navaSetActive}/>         
             <NavItem title="About" isAcitve={navActive} updateFunction={navaSetActive}/>
             <NavItem title="Skate" isAcitve={navActive} updateFunction={navaSetActive}/>
         </nav>
     )
 }
 
 export default Nav





/*import styles from './Nav.module.css'
import NavItem from "./NavItem"

const Navigation = () => {
return (
    <nav>
        <div className={styles.navContainer}>
            <NavItem category="Home" />
            <NavItem category="World" />
            <NavItem category="Sweden" />
        </div>
    </nav>
)
}

export default Navigation
*/