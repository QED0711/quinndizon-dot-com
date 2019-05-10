
import React, { useState } from 'react';

const LaptopIcon = ({ image }) => {
    let [iconClicked, setIconClicked] = useState(false);
    const handleClick = () => {
        const clickToggle = !iconClicked;
        setIconClicked(clickToggle)
    }
    return(
        <div className={`icon-container icon-clicked-${iconClicked}`} onClick={handleClick}>
            <div className="laptop-screen-frame icon-body">
		        <div className="image-screen laptop-screen" style={{backgroundImage: `url("${image}")`}}></div>
	        </div>
	        <div className="laptop-bass icon-body">		
	        </div>
        </div>
    )
}

const TabletIcon = ({ image }) => {
    let [iconClicked, setIconClicked] = useState(false);
        const handleClick = () => {
            const clickToggle = !iconClicked;
            setIconClicked(clickToggle)
        }
    return(
            <div className={`icon-container icon-clicked-${iconClicked}`} onClick={handleClick}>
            <div className="tablet-screen-frame icon-body">
                <div className="image-screen tablet-screen" style={{backgroundImage: `url("${image}")`}}></div>
                <div className="tablet-button"></div>
            </div>
        </div>
    )
}

const MobileIcon = ({ image }) => {
    let [iconClicked, setIconClicked] = useState(false);
    const handleClick = () => {
        const clickToggle = !iconClicked;
        setIconClicked(clickToggle)
    }
    return(
        <div className={`icon-container icon-clicked-${iconClicked}`} onClick={handleClick}>
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