import React from "react";
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () =>
{
return(
    <div id='contact' className="contact">
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={theme_pattern} />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I am looking for an internship for my 12 credits in Masters</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" />
                        <p>bisheshamatya21@gmail.com</p>

                    </div>
                    <div className="contact-detail">
                    <img src={call_icon} alt="" />
                    <p>+4915560192086</p>

                        
                    </div>
                    <div className="contact-detail">
                    <img src={location_icon} alt="" />
                    <p>Bamberg, Germany</p>

                    </div>
                </div>

            </div>
            <form className="contact-right">
                <label>Your name</label>
                <input type="text" placeholder="Enter you name" name="name"/>
                <label>Your Email</label>
                <input type="email"placeholder="Enter your email"></input>
                <label>Write your message</label>
                <textarea name="message" rows={8} placeholder="Enter your message">
                </textarea>
                <button type="submit" className="contact-submit">Submit now</button>
            </form>
        </div>

    </div>
)
}
export default Contact