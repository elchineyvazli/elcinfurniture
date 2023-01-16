import './BeautySpacePageImageSide.scss'
import greenCircleImage from '../../../../images/BeautySpaceImages/greenCircle.png'
import womanPicture from '../../../../images/BeautySpaceImages/womanPicture.png'
const BeautySpacePageImageSide = () => {
    return (
        <div className="beautySpacePageImageSide">
            <img className='greenCircleImage' src={greenCircleImage} alt="" />
            <img className='womanPicture' src={womanPicture} alt="" />
        </div>
    )
}

export default BeautySpacePageImageSide
