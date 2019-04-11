import React, { Component } from 'react';

import DesktopNavbar from './DesktopNavbar';

class NavContainer extends Component {

    render(){
        return(
            <div className="nav-container">
                <DesktopNavbar />
                {/* <MobileNavbar /> */}
            </div>
        )
    }
}

export default NavContainer;