import React, { useState} from 'react';
import { Link } from 'react-router-dom';
// CONTENT
import RESUME_CONTENT from '../../content/resume';

// COMPONENTS
import { TitleBox, ResumeButton } from '../elements/stateless';
import ResumeButtonGroup from './ResumeButtonGroup'
import PDFLink from './PDFLink';
import SelectedResumeContent from './SelectedResumeContent';

const ResumeContainer = () => {
    let names = RESUME_CONTENT.items.map(item => item.name)
    
    let [resumeItem, setResumeItem] = useState(names[0]);
    let [resumeVersion, setResumeVersion] = useState('programming')

    let content = RESUME_CONTENT.items.filter(item => item.name === resumeItem)[0]
    
    return(
        <div className="resume-container content-container sliding-container">
            
            
            <TitleBox title={RESUME_CONTENT.title} />            

            <a href="#">View as PDF</a>

            <ResumeButtonGroup names={names} setResumeItem={setResumeItem} />
            <SelectedResumeContent content={content} />

        </div>
    )
    
}

export default ResumeContainer;