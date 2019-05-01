import React from 'react';

import { LaptopIcon, MobileIcon, TabletIcon } from './projectIcons'

const ProjectCardContainer = ({ currentProject }) => {
    
    const { laptopImage, tabletImage, mobileImage } = currentProject

    return(
        <div className="project-card-container">
            
            {laptopImage && <LaptopIcon image={laptopImage} />}
            {tabletImage && <TabletIcon image={tabletImage} />}
            {mobileImage && <MobileIcon image={mobileImage} />}
        </div>
    )
}

export default ProjectCardContainer;