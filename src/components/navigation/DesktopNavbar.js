import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class DesktopNavbar extends Component {

    render(){
        return(
            <nav className="desktop-navbar">
                <Link to="/">About</Link>
                <Link to="/events">Events</Link>
                <Link to="/listen">Listen</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/blog">Blog</Link>
            </nav>
        )
    }
}

export default DesktopNavbar;