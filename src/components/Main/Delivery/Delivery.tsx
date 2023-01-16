import './Delivery.scss'
import truckImage from '../../../images/DeliveryImages/deliveryTruckIcon.png'
import digitImage from '../../../images/DeliveryImages/24Digit.png'
import shieldImage from '../../../images/DeliveryImages/shiled.png'
import { DeliveryItem } from './DeliveryItem/DeliveryItem'

export const Delivery = () => {
    return (
        <section className="delivery">
            <DeliveryItem imageValue={truckImage} headerTextValue={'Free Delivery'} textValue={'Lorem ipsum dolor sit amet.'} />
            <DeliveryItem imageValue={digitImage} headerTextValue={'Support 24/7'} textValue={'Lorem ipsum dolor sit amet.'} />
            <DeliveryItem imageValue={shieldImage} headerTextValue={'100% Authentic'} textValue={'Lorem ipsum dolor sit amet.'} />
        </section>
    )
}
