import React, { Component } from 'react';
import { renderTags, TitleBox } from '../elements/stateless';

// CONTENT
import ABOUT_CONTENT from '../../content/about';

// COMPONENTS

import BioBox from './BioBox';

class AboutContainer extends Component {

    render(){

        return(
            <div className="about-container">
                
                <TitleBox title={ABOUT_CONTENT.title} />
                
                <BioBox content={ABOUT_CONTENT} />

                

            </div>
        )
    }
}

export default AboutContainer;