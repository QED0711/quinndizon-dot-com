import React from 'react';

import LandingText from './LandingText'

import landingImage from '../../media/landingImage.JPG'


const LandingContainer = () => {

    return(
        <div className="landing-container" style={{backgroundImage: `url(${landingImage})`}}>
                <LandingText />
        </div>
    )
}

export default LandingContainer;