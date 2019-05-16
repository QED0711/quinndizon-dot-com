import React from 'react';

import renderContent from '../../js/renderConent';
import { parseTitle } from '../../js/helpers';

const SelectedResumeContent = ({ content }) => {
    console.log(content )
    return(
        <div className={`selected-resume-content inner-content-body resume-item-${parseTitle(content.name)}`}>

            {content && renderContent(content)}

        </div>
    )

}

export default SelectedResumeContent;