import RoomPageCard from './RoomPageCard/RoomPageCard'
import './RoomPagePicturePart.scss'
import image1 from '../../../../../images/RoomPageImages/roomPageCardImage1.png'
import image2 from '../../../../../images/RoomPageImages/roomPageCardImage2.png'
import image3 from '../../../../../images/RoomPageImages/roomPageCardImage3.png'
const RoomPagePicturePart = () => {
    return (
        <div className='roomPagePicturePart'>
            <RoomPageCard imgValue={image1} textValue={'Dining'} />
            <RoomPageCard imgValue={image2} textValue={'Living'} />
            <RoomPageCard imgValue={image3} textValue={'Bedroom'} />
        </div>
    )
}

export default RoomPagePicturePart
