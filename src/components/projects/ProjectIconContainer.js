import React from 'react';

import { LaptopIcon, MobileIcon, TabletIcon } from './projectIcons'

const ProjectIconContainer = ({ laptopImage, tabletImage, mobileImage }) => {
    const iconCount = [laptopImage, tabletImage, mobileImage].filter(x => x).length 
    return(
        <div className="project-icon-container" style={{
            gridTemplateColumns: `repeat(${iconCount}, 1fr)`,
            maxWidth: `${12 * iconCount}em`
        }}>
            {tabletImage && <TabletIcon image={tabletImage} />}
            {laptopImage && <LaptopIcon image={laptopImage} />}
            {mobileImage && <MobileIcon image={mobileImage} />}
        </div> 
    )

}

export default ProjectIconContainer;