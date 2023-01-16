import './RoomPage.scss'
import RoomPagePicturePart from './RoomPageText/RoomPagePicturePart/RoomPagePicturePart'
import RoomPageText from './RoomPageText/RoomPageText'
const RoomPage = () => {
    return (
        <section className='roomPage'>
            <RoomPageText />
            <RoomPagePicturePart />
        </section>
    )
}

export default RoomPage
