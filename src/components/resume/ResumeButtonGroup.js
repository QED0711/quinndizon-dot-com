
import React from 'react'

import { ResumeButton } from '../elements/stateless'

const ResumeButtonGroup = ({ names, setResumeItem }) => {

    return(
        <div className="resume-button-group">
            {names.map((name, i) => <ResumeButton key={i} text={name} setResumeItem={setResumeItem}/>)}
        </div>
    )

}

export default ResumeButtonGroup;