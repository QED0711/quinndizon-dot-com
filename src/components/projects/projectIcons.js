
import React from 'react';

const LaptopIcon = ({ image }) => {
    return(
        <div className="icon-container">
            <div className="laptop-screen-frame icon-body">
		        <div className="image-screen laptop-screen" style={{backgroundImage: `url("${image}")`}}></div>
	        </div>
	        <div className="laptop-bass icon-body">		
	        </div>
        </div>
    )
}

const TabletIcon = ({ image }) => {
    return(
        <div className="icon-container">
            <div className="tablet-screen-frame icon-body">
                <div className="image-screen tablet-screen" style={{backgroundImage: `url("${image}")`}}></div>
                <div className="tablet-button"></div>
            </div>
        </div>
    )
}

const MobileIcon = ({ image }) => {
    return(
        <div className="icon-container">
            <div className="mobile-screen-frame icon-body" >
                <div className="image-screen" style={{backgroundImage: `url("${image}")`}}></div>
            </div>
        </div>
    )
}

export {
    LaptopIcon,
    TabletIcon,
    MobileIcon
}