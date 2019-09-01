import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';



const MobileNavbar = () => {    
    
    let [navVisible, setNavVisible] = useState(false); 
    const handleClick = () => {
        const toggleDirection = !navVisible
        setNavVisible(toggleDirection); 
    }
    return(
        <div className="mobile-nav-container">
            <div className="mobile-navbar-toggle" onClick={handleClick}>
                <div className="hamburger-icon"></div>    
                <div className="hamburger-icon"></div>    
                <div className="hamburger-icon"></div>    
            </div>
            <nav className={`mobile-navbar navbar mobile-nav-visible-${navVisible}`} onClick={handleClick}>
                <div className="mobile-nav-item nav-item">
                    <Link to="/">About</Link>
                </div>
                {/* <div className="mobile-nav-item nav-item">
                    <Link to="/events">Events</Link>
                </div> */}
                <div className="mobile-nav-item nav-item">
                    <Link to="/listen">Listen</Link>
                </div>
                <div className="mobile-nav-item nav-item">
                    <Link to="/projects">Projects</Link>
                </div>
                <div className="mobile-nav-item nav-item">
                    <Link to="/resume">Resume</Link>
                </div>
                <div className="mobile-nav-item nav-item">
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="mobile-nav-item nav-item">
                    <Link to="/blog">Blog</Link>
                </div>
                
            </nav>
        </div>
    )
    
}

export default MobileNavbar;
