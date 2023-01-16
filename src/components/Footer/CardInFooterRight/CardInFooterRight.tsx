import './CardInFooterRight.scss'
import { FC } from 'react'
type FooterCardType = {
    imgValue: string
}
const CardInFooterRight: FC<FooterCardType> = ({ imgValue }) => {
    return (
        <img src={imgValue} alt="" />
    )
}

export default CardInFooterRight
