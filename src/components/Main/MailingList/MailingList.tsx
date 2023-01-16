import './MailingList.scss'
const MailingList = () => {
    return (
        <section className='mailingList'>
            <div className="totalStuffsInMailingList">
                <div className="textAreaInMailingList">
                    <h1 className='headerTextInMailingList'>Join Our Mailing List</h1>
                    <p className='textInMailingList'>Sign up to receive inspiration, product updates, and special offers from our team.</p>
                </div>
                <div className="inputs">
                    <input className='textInput' type="text" placeholder='example@gmail.com' />
                    <button type='submit' className='submitButton'>Submit</button>
                </div>
            </div>
        </section>
    )
}

export default MailingList
