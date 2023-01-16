import { Link } from 'react-router-dom'
import './MenuInNavbar.scss'
export const MenuInNavbar = () => {
    return (
        <div className="menuInNavbar">
            <Link className='links' to="/home">Home</Link>
            <Link className='links' to="/services">Services</Link>
            <Link className='links' to="/doctors">Doctors</Link>
            <Link className='links' to="/products">Products</Link>
            <Link className='links' to="/gallery">Gallery</Link>
        </div>
    )
}
