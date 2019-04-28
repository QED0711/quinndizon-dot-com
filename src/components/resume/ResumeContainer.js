import React, { useState} from 'react';
import { Link } from 'react-router-dom';
// CONTENT
import RESUME_CONTENT from '../../content/resume';

// COMPONENTS
import { TitleBox, ResumeButton } from '../elements/stateless';
import ResumeButtonGroup from './ResumeButtonGroup'
import PDFLink from './PDFLink';


const ResumeContainer = () => {
    
    let [resumeItem, setResumeItem] = useState(null);
    let [resumeVersion, setResumeVersion] = useState('programming')
    console.log(resumeItem);

    return(
        <div className="resume-container">
            
            
            <TitleBox title={RESUME_CONTENT.title} />            

            <a href="#">View as PDF</a>

            <ResumeButtonGroup setResumeItem={setResumeItem} />


        </div>
    )
    
}

export default ResumeContainer;