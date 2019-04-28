import React from 'react';

const SelectedWork = ({ work }) => {
    console.log(work)
    return(
        <div className="selected-work">
            <h3>{work.title}</h3>
            {work.soundCloud}
            {work.score}
        </div>
    )
}

export default SelectedWork;