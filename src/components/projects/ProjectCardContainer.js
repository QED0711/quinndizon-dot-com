import React from 'react';
import ProjectIconContainer from './ProjectIconContainer';



const ProjectCardContainer = ({ currentProject }) => {
    
    const { laptopImage, tabletImage, mobileImage } = currentProject

    return(
        <div className="project-card-container">
            
            <ProjectIconContainer laptopImage={laptopImage} tabletImage={tabletImage} mobileImage={mobileImage} />
            
        </div>
    )
}

export default ProjectCardContainer;