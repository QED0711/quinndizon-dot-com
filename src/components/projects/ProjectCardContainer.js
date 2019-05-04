import React from 'react';
import ProjectIconContainer from './ProjectIconContainer';

import renderContent from '../../js/renderConent';

import ProjectLinks from './ProjectLinks';

const ProjectCardContainer = ({ currentProject }) => {
    const { laptopImage, tabletImage, mobileImage } = currentProject
    return(
        <div className="project-card-container">            
            <ProjectIconContainer laptopImage={laptopImage} tabletImage={tabletImage} mobileImage={mobileImage} />
            <ProjectLinks project={currentProject} />
            {renderContent(currentProject)}
        </div>
    )
}

export default ProjectCardContainer;