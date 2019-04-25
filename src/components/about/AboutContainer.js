import React, { Component } from 'react';
import { renderTags, TitleBox } from '../elements/stateless';

// CONTENT
import ABOUT_CONTENT from '../../content/about';

class AboutContainer extends Component {
    
    render(){

        

        return(
            <div className="about-container">
                
                <TitleBox title={ABOUT_CONTENT.title} />

                {renderTags(ABOUT_CONTENT.shortBio)}
                {renderTags(ABOUT_CONTENT.fullBio)}


            </div>
        )
    }
}

export default AboutContainer;