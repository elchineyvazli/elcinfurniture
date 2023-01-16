import './HowToWorkPage.scss'
import HowToWorkPageCardPart from './HowToWorkPageCardPart/HowToWorkPageCardPart'
import HowToWorkPageText from './HowToWorkPageText/HowToWorkPageText'
const HowToWorkPage = () => {
    return (
        <section className="howToWorkPage">
            <HowToWorkPageText/>
            <HowToWorkPageCardPart/>
        </section>
    )
}

export default HowToWorkPage
