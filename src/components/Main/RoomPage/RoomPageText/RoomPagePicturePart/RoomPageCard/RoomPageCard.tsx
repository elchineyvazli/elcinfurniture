import {FC} from 'react'
import './RoomPageCard.scss'
type roomPageCardTypes ={
    imgValue : string,
    textValue : string
}
const RoomPageCard:FC<roomPageCardTypes> = ({imgValue, textValue}) => {
  return (
    <div className='roomPageCard'>
        <img className='imageInRoomPageCard' src={imgValue} alt="" />
        <p className="textInRoomPageCard">{textValue}</p>
    </div>
  )
}

export default RoomPageCard
