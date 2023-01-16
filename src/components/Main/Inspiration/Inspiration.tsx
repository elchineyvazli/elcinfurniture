import './Inspiration.scss'
import InspirationCardPage from './InspirationCardPage/InspirationCardPage'
import InspirationText from './InspirationText/InspirationText'

const Inspiration = () => {
    return (
        <section className='inspiration'>
            <InspirationText />
            <InspirationCardPage />
        </section>
    )
}

export default Inspiration
