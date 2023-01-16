import BeautySpacePage from './BeautySpacePage/BeautySpacePage'
import { Delivery } from './Delivery/Delivery'
import HowToWorkPage from './HowToWorkPage/HowToWorkPage'
import Inspiration from './Inspiration/Inspiration'
import MailingList from './MailingList/MailingList'
import './Main.scss'
import RoomPage from './RoomPage/RoomPage'
export const Main = () => {
    return (
        <main className='mainPage'>
            <Delivery />
            <Inspiration />
            <BeautySpacePage />
            <RoomPage />
            <HowToWorkPage />
            <MailingList/>
        </main>
    )
}
