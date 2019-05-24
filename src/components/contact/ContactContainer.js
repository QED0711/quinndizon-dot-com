import React, { Component } from 'react';

// CONTENT
import CONTACT_CONTENT from '../../content/contact';
// COMPONENTS
import { TitleBox } from '../elements/stateless';
class ContactContainer extends Component {
    render(){
        return(
            <div className="contact-container content-container sliding-container">
                <TitleBox title={CONTACT_CONTENT.title} />


                <form action="https://formspree.io/qdizon%40gmail%2ecom" method="POST" className="contact-form">
                    
                    <div className="contact-statement">
                        <p>Interested in seeing what Quinn can do for you, or how you can collaborate? Quinn is always happy to consider new projects! Reach out with the email form below.</p>
                        <p>Services that Quinn can provide are:</p>
                        <ul>
                            <em>
                                <li>Personalized website design, development, & consulting</li>
                                <li>Audio recording, mixing, & mastering</li>
                                <li>Original compositions</li>
                                <li>Conducting</li>                            
                                <li>Arranging & engraving</li>
                            </em>

                        </ul>
                        <p>Think Quinn may be able to help with something not on the list? Send him a message anyway. He is always eager to explore new possibilities.</p>
                    </div>

                    <div className="contact-form-name">
                        <label htmlFor="name"><h3>Your Name:</h3></label>
                        <br/>
                        <input type="text" id="name" name="name" required />
                    </div>
                    
                    
                    <div className="contact-form-email">
                        <label htmlFor="reply-to"><h3>Your Email Address:</h3></label>
                        <br/>
                        <input type="email" id="reply-to" name="reply-to" required/>
                    </div>
                    
                    
                    <div className="contact-form-subject">
                        <label htmlFor="subject"><h3>Subject:</h3></label>
                        <br/>
                        <input type="text" id="subject" name="subject"/>
                    </div>
                    
                    
                    <div className="contact-form-message"> 
                        <label htmlFor="message-body"><h3>Your Message:</h3></label>                    
                        <br/>
                        <textarea id="message-body" name="message-body" style={{resize: "none"}} ></textarea>
                    </div>
                    

                    <div className="contact-form-submit">
                        <input type="submit" value="Send Message" />
                        <p>powered by <em>Formspree</em></p>
                    </div>

                </form>
            </div>
        )
    }
}

export default ContactContainer;