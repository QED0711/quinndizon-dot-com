
import React from 'react';

const LaptopIcon = ({ image }) => {
    return(
        <div className="icon-container">
            <div className="laptop-screen-frame">
		        <div className="image-screen" style={{backgroundImage: `url("${image}")`}}></div>
	        </div>
	        <div className="laptop-bass">		
	        </div>
        </div>
    )
}

const TabletIcon = ({ image }) => {
    return(
        <div className="icon-container">

        </div>
    )
}

const MobileIcon = ({ image }) => {
    return(
        <div className="icon-container">

        </div>
    )
}

export {
    LaptopIcon,
    TabletIcon,
    MobileIcon
}