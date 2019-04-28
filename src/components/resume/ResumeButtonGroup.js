
import React from 'react'

import { ResumeButton } from '../elements/stateless'

const ResumeButtonGroup = ({ setResumeItem }) => {

    return(
        <div className="resume-button-group">
            <ResumeButton text="Skills" setResumeItem={setResumeItem} />
            <ResumeButton text="Experience" setResumeItem={setResumeItem} />
            <ResumeButton text="Education" setResumeItem={setResumeItem} />
        </div>
    )

}

export default ResumeButtonGroup;