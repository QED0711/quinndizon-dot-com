import React, { Component } from 'react';

// CONTENT
import CONTACT_CONTENT from '../../content/contact';
// COMPONENTS
import { TitleBox } from '../elements/stateless';
class ContactContainer extends Component {
    render(){
        return(
            <div className="contact-container content-container">
                <TitleBox title={CONTACT_CONTENT.title} />

                <form action="https://formspree.io/qdizon%40gmail%2ecom" method="POST">
                
                    <label htmlFor="name"><h3>Your Name:</h3></label>
                    <br/>
                    <input type="text" id="name" name="name" required />
                    
                    <br/>
                    
                    <label htmlFor="reply-to"><h3>Your Email Address:</h3></label>
                    <br/>
                    <input type="email" id="reply-to" name="reply-to" required/>
                    
                    <br/>
                    
                    <label htmlFor="subject"><h3>Subject:</h3></label>
                    <br/>
                    <input type="text" id="subject" name="subject"/>
                    
                    <br/>
                    
                    <label htmlFor="message-body"><h3>Your Message:</h3></label>                    
                    <br/>
                    <textarea id="message-body" name="message-body"></textarea>
                    
                    <br/>
                    
                    <input type="submit" value="Send Message" />
                    <p>powered by <em>Formspree</em></p>

                </form>
            </div>
        )
    }
}

export default ContactContainer;