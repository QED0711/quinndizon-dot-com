import React, { useState } from 'react';

import { LaptopIcon, MobileIcon, TabletIcon } from './projectIcons'

const ProjectIconContainer = ({ laptopImage, tabletImage, mobileImage }) => {
    
    let [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    const iconCount = [laptopImage, tabletImage, mobileImage].filter(x => x).length 
    setInterval(() => {
        if(window.innerWidth !== windowWidth){
            setWindowWidth(window.innerWidth);
        }
    }, 2000)
    return(
        <div className="project-icon-container" style={{
            gridTemplateColumns: windowWidth > 600 ? `repeat(${iconCount}, 1fr)` : "1fr",
            maxWidth: `${12 * iconCount}em`
        }}>
            {tabletImage && <TabletIcon image={tabletImage} />}
            {laptopImage && <LaptopIcon image={laptopImage} />}
            {mobileImage && <MobileIcon image={mobileImage} />}
        </div> 
    )

}

export default ProjectIconContainer;