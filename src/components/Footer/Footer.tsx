import CardInFooterRight from './CardInFooterRight/CardInFooterRight'
import './Footer.scss'
import footerImage1 from '../../images/FooterImages/footerImage1.jpg'
import footerImage2 from '../../images/FooterImages/footerImage2.jpg'
import footerImage3 from '../../images/FooterImages/footerImage3.jpg'
import footerImage4 from '../../images/FooterImages/footerImage4.jpg'
export const Footer = () => {
  return (
    <footer>
      <div className="footerLeft">
        <h2 className='firstHeaderTextInFooterLeft'>Beauty Care</h2>
        <p className='textInFooter'>Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        <h1 className='secondHeaderTextInFooterLeft'>Follow Us</h1>
      </div>
      <div className="footerRight">
        <h1 className="headerTextInFooterRight">Instagram Shop</h1>
        <div className="imageContainer">
          <CardInFooterRight imgValue={footerImage1} />
          <CardInFooterRight imgValue={footerImage2} />
          <CardInFooterRight imgValue={footerImage3} />
          <CardInFooterRight imgValue={footerImage4} />
        </div>
      </div>
    </footer>
  )
}
