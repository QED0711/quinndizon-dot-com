import React, { Component } from 'react';

// CONTENT
import RESUME_CONTENT from '../../content/resume';

// COMPONENTS
import { TitleBox } from '../elements/stateless';

class ResumeContainer extends Component {
    render(){
        return(
            <div className="resume-container">
                <TitleBox title={RESUME_CONTENT.title} />
            </div>
        )
    }
}

export default ResumeContainer;