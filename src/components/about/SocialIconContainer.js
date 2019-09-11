import React from 'react';

import linkedInLogo from '../../media/Linkedin.svg'
import mediumLogo from '../../media/medium.svg'

const SocialIconContainer = () => {

    return(
        <div className="social-icon-container">
                <a href="https://www.linkedin.com/in/quinn-dizon/" target="_blank"><img className="social-icon" src={linkedInLogo} /></a>
               
                <a href="https://medium.com/@qdizon" target="_blank"><img className="social-icon" src={mediumLogo} /></a>
        </div>
    )

}

export default SocialIconContainer;