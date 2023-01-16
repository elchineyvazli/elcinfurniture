import { Link } from 'react-router-dom'
import backgroundImage from '../../../images/background.jpg'
import './Home.scss'
export const Home = () => {
    return (
        <section className="home" id="home">
            <img className='imageInHome' src={backgroundImage} alt="" />
            <div className="home-container">
                <p className='textInHomeContainer'>New Arrival</p>
                <h1 className='firstHeadertextInHomeContainer'>Discover Our <span>New Collection</span> </h1>
                <h4 className='secondHeadertextInHomeContainer'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut elit tellus, luctus nec ullamcoper mattis.</h4>
                <Link to="/contact" className="btn">Buy Now</Link>
            </div>
        </section>
    )
}
