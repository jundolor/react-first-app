
import PhoneIcon from '../assets/images/phone-icon.png'
import MailIcon from '../assets/images/mail-icon.png'

export default function Contact(props){
    return (
        <article className="contact-card">
            <img 
                src={props.img}
                alt={props.alt}
            />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img 
                    src={PhoneIcon}
                    alt="phone icon" 
                />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img 
                    src={MailIcon}
                    alt="mail icon"
                />
                <p>{props.email}</p>
            </div>
        </article>
    )
}