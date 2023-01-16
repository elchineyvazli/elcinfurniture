import './BeautySpacePage.scss'
import BeautySpacePageImageSide from './BeautySpacePageImageSide/BeautySpacePageImageSide'
import BeautySpacePageTextSide from './BeautySpacePageTextSide/BeautySpacePageTextSide'

const BeautySpacePage = () => {
  return (
    <section className='beautySpacePage'>
      <BeautySpacePageTextSide />
      <BeautySpacePageImageSide />
    </section>
  )
}

export default BeautySpacePage
