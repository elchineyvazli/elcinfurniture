import { Link } from 'react-router-dom'
import './LogoContainerInNavbar.scss'
export const LogoContainerInNavbar = () => {
    return (
        <div className="logo-container">
            <Link to='/' className='logoInHeader'>Furniture</Link>
        </div>
    )
}
