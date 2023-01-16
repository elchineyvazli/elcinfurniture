import InspirationCard from './InspirationCard/InspirationCard'
import './InspirationCardPage.scss'

import image1 from '../../../../images/InspirationCardImages/cardImage1.png'
import image2 from '../../../../images/InspirationCardImages/cardImage2.png'
import image3 from '../../../../images/InspirationCardImages/cardImage3.png'


const InspirationCardPage = () => {
    return (
        <div className='inspirationCardPage'>
            <InspirationCard imgValue={image1} borderValue={'68px 0 0 0'} marginBottomValue={0} />
            <InspirationCard imgValue={image2} borderValue={'0'} marginBottomValue={120} />
            <InspirationCard imgValue={image3} borderValue={'0 0 68px 0'} marginBottomValue={0} />
        </div>
    )
}

export default InspirationCardPage
