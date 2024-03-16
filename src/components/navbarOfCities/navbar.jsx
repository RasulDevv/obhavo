import { NavLink } from "react-router-dom"
import data from "../../data/data"
import styles from "./navbar.module.css"

const NavbarOfCities = () => {
    return (
        <ul className={styles.list}>
            {data.cities.map(item => (
                <li key={item}>
                    <NavLink className={({isActive}) => isActive ? styles.activeLink : ""} to={item}>{item}</NavLink>
                </li>
            ))}
        </ul>
    )
}

export default NavbarOfCities
