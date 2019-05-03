
import React from 'react';

import ProjectInfo from './ProjectInfo';

const ProjectBoxes = ({projects}) => {

    const renderProjectInfo = (projects) => {
        return projects.map((project, i) => {
            return <ProjectInfo key={i} project={project} />
        })
    }

    return(
        <div className="project-boxes content-selector-container">
            {renderProjectInfo(projects)}
        </div>
    )

}

export default ProjectBoxes