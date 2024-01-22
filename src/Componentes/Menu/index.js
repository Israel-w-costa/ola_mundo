import MenuLink from '../MenuLink';
import styles from './Menu.module.css'

export default function Menu() {
    
    return (
        <header>
            <nav className={styles.navegacao}>
             <MenuLink to="/">
                Inicio
             </MenuLink>
             <MenuLink to="/SobreMin">
                Sobre Mim
             </MenuLink>
            </nav>
        </header>)
}