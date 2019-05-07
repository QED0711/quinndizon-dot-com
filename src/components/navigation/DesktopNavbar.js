import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class DesktopNavbar extends Component {

    render(){
        return(
            <nav className="desktop-navbar navbar">
                <div>
                    <Link to="/">About</Link>
                </div>
                <div>
                    <Link to="/events">Events</Link>
                </div>
                <div>
                    <Link to="/listen">Listen</Link>
                </div>
                <div>
                    <Link to="/projects">Projects</Link>
                </div>
                <div>
                    <Link to="/resume">Resume</Link>
                </div>
                <div>
                    <Link to="/contact">Contact</Link>
                </div>
                <div>
                    <Link to="/blog">Blog</Link>
                </div>
            </nav>
        )
    }
}

export default DesktopNavbar;
