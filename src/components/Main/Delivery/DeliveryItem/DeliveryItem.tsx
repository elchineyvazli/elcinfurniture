import './DeliveryItem.scss'
import { FC } from 'react'
type deliveryItemTypes = {
    imageValue: string,
    headerTextValue: string,
    textValue: string
}
export const DeliveryItem: FC<deliveryItemTypes> = ({ imageValue, headerTextValue, textValue }) => {
    return (
        <div className="delivery-item">
            <img src={imageValue} alt="" className='imagesInDelivery' />
            <div>
                <h1 className='deliveryHeaderText'>{headerTextValue}</h1>
                <p className='deliveryText'>{textValue}</p>
            </div>

        </div>
    )
}
