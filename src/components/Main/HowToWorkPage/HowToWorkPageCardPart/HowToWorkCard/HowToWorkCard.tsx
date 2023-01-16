import './HowToWorkCard.scss'
import { FC } from 'react'
type howToWorkCardTypes = {
    mainImgValue: string,
    circleImgValue: string,
    headerTextValue: string,
    textValue: string
}
const HowToWorkCard: FC<howToWorkCardTypes> = ({ mainImgValue, circleImgValue, headerTextValue, textValue }) => {
    return (
        <div className='howToWorkCard'>
            <div className="forPictureInHowToCard">
                <img className='mainImageInHowToCard' src={mainImgValue} alt="" />
                <img className='imageInHowToCard' src={circleImgValue} alt="" />
            </div>
            <div className="forTextInHowToCard">
                <h1 className='forPictureInHowToCardHeaderText'>{headerTextValue}</h1>
                <p className="forPictureInHowToCardText">{textValue}</p>
            </div>
        </div>
    )
}

export default HowToWorkCard
