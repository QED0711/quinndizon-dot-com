import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class DesktopNavbar extends Component {

    render(){
        return(
            <nav className="desktop-navbar navbar">
                <div className="nav-item desktop-nav-item">
                    <Link to="/">About</Link>
                </div>
                {/* <div className="nav-item desktop-nav-item">
                    <Link to="/events">Events</Link>
                </div> */}
                <div className="nav-item desktop-nav-item">
                    <Link to="/listen">Listen</Link>
                </div>
                <div className="nav-item desktop-nav-item">
                    <Link to="/projects">Projects</Link>
                </div>
                <div className="nav-item desktop-nav-item">
                    <Link to="/resume">Resume</Link>
                </div>
                <div className="nav-item desktop-nav-item">
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="nav-item desktop-nav-item">
                    <Link to="/blog">Blog</Link>
                </div>
            </nav>
        )
    }
}

export default DesktopNavbar;
