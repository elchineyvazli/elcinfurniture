import './InspirationCard.scss'
import { FC } from 'react'
type inspirationCardTypes = {
    imgValue: string,
    borderValue: string,
    marginBottomValue: number
}
const InspirationCard: FC<inspirationCardTypes> = ({ imgValue, borderValue, marginBottomValue }) => {
    return (
        <div className='inspirationCard' style={{ borderRadius: borderValue, marginBottom: `${marginBottomValue}px` }}>
            <img className='inspirationCardImage' src={imgValue} alt="" style={{ borderRadius: borderValue}} />
        </div>
    )
}

export default InspirationCard
