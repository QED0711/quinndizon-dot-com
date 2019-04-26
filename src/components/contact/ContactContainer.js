import React, { Component } from 'react';

// CONTENT
import CONTACT_CONTENT from '../../content/contact';
// COMPONENTS
import { TitleBox } from '../elements/stateless';
class ContactContainer extends Component {
    render(){
        return(
            <div className="contact-container">
                <TitleBox title={CONTACT_CONTENT.title} />
            </div>
        )
    }
}

export default ContactContainer;