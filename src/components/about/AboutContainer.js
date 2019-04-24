import React, { Component } from 'react';
import { TitleBox } from '../elements/stateless';

// CONTENT
import ABOUT_CONTENT from '../../content/about';

class AboutContainer extends Component {
    
    render(){

        return(
            <div className="about-container">
                
                <TitleBox title={ABOUT_CONTENT.title} />

                


            </div>
        )
    }
}

export default AboutContainer;