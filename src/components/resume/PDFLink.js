import React from 'react';

const PDFLink = ({ resumeVersion }) => {
    return(
        <div className="pdf-link">
            {
                resumeVersion === 'programming' 
                ?
                <a href="#">View as PDF</a>
                :
                <a href="#">View as PDF</a>
            }
        </div>
    )
}

export default PDFLink;

