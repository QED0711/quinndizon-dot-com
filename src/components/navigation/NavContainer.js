import React, { Component } from 'react';

import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

class NavContainer extends Component {

    render(){
        return(
            <div className="nav-container">
                <DesktopNavbar />
                <MobileNavbar />
            </div>
        )
    }
}

export default NavContainer;