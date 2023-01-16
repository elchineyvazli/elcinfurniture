import HowToWorkCard from './HowToWorkCard/HowToWorkCard'
import './HowToWorkPageCardPart.scss'
import circleImage1 from '../../../../images/HowItWorksImages/circleOneImage.png'
import circleImage2 from '../../../../images/HowItWorksImages/circleTwoImage.png'
import circleImage3 from '../../../../images/HowItWorksImages/circleThreeImage.png'

import mainImage1 from '../../../../images/HowItWorksImages/howToWorkImage1.png'
import mainImage2 from '../../../../images/HowItWorksImages/howToWorkImage2.png'
import mainImage3 from '../../../../images/HowItWorksImages/howToWorkImage3.png'

const HowToWorkPageCardPart = () => {
    return (
        <div className='howToWorkPageCardPart'>
            <HowToWorkCard mainImgValue={mainImage1} circleImgValue={circleImage1} headerTextValue={'Purchase Securely'} textValue={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
            <HowToWorkCard mainImgValue={mainImage2} circleImgValue={circleImage2} headerTextValue={'Ships From Warehouse'} textValue={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
            <HowToWorkCard mainImgValue={mainImage3} circleImgValue={circleImage3} headerTextValue={'Style Your Room'} textValue={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
        </div>
    )
}

export default HowToWorkPageCardPart
