import React from 'react';

import { LaptopIcon, MobileIcon, TabletIcon } from './projectIcons'

const ProjectIconContainer = ({ laptopImage, tabletImage, mobileImage }) => {

    return(
        <div className="project-icon-container">
            {laptopImage && <LaptopIcon image={laptopImage} />}
            {tabletImage && <TabletIcon image={tabletImage} />}
            {mobileImage && <MobileIcon image={mobileImage} />}
        </div> 
    )

}

export default ProjectIconContainer;