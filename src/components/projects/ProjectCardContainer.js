import React from 'react';
import ProjectIconContainer from './ProjectIconContainer';

import renderContent from '../../js/renderConent';

const ProjectCardContainer = ({ currentProject }) => {
    const { laptopImage, tabletImage, mobileImage } = currentProject
    return(
        <div className="project-card-container">
            
            <ProjectIconContainer laptopImage={laptopImage} tabletImage={tabletImage} mobileImage={mobileImage} />
            {renderContent(currentProject)}
        </div>
    )
}

export default ProjectCardContainer;