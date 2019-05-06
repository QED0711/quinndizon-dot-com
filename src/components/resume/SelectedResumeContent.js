import React from 'react';

import renderContent from '../../js/renderConent';

const SelectedResumeContent = ({ content }) => {

    
    console.log(content)
    return(
        <div className="selected-resume-content inner-content-body">

            {content && renderContent(content)}

        </div>
    )

}

export default SelectedResumeContent;