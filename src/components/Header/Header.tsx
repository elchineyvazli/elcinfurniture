import './Header.scss'
import { Navbar } from './Navbar/Navbar'
import { Home } from '../Header/Home/Home'
export const Header = () => {
    return (
        <header>
            <Navbar />
            <Home />
        </header>
    )
}
