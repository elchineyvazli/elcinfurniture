import './Navbar.scss'
import { MenuInNavbar } from './MenuInNavbar/MenuInNavbar'
import { LogoContainerInNavbar } from './LogoContainerInNavbar/LogoContainerInNavbar'
export const Navbar = () => {
    return (
        <nav className='navbarInHeader'>
            <LogoContainerInNavbar />
            <MenuInNavbar />
        </nav>
    )
}
