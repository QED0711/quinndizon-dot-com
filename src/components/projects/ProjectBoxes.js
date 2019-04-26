
import React from 'react';

import ProjectInfo from './ProjectInfo';

const ProjectBoxes = ({projects}) => {

    const renderProjectInfo = (projects) => {
        return projects.map((project, i) => {
            return <ProjectInfo key={i} project={project} />
        })
    }

    return(
        <div>
            {renderProjectInfo(projects)}
        </div>
    )

}

export default ProjectBoxes