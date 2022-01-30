
import 'bootstrap-icons/font/bootstrap-icons.css'


const Contact = () => {
    return (
        <div id="contact" className="section">
            <h1>Contact</h1>
            <div className="contact-container">
            <div className="contact-item">
                    <a href="mailto:aaron.mari.6781@gmail.com">
                    <i className="bi-envelope"></i>
                    <p>Email</p>
                    </a>
                </div>
                <div className="contact-item">
                    <a href="https://twitter.com/AaronMari9/">
                    <i className="bi-twitter"></i>
                    <p>Twitter</p>
                    </a>
                </div>
                <div className="contact-item">
                    <a href="https://www.linkedin.com/in/aaron-mari-953353230">
                    <i className="bi-linkedin"></i>
                    <p>LinkedIn</p>
                    </a>
                </div>
                <div className="contact-item">
                    <a href="https://www.github.com/aaron-mari">
                    <i className="bi-github"></i>
                    <p>Github</p>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default Contact