import React, { Component } from 'react';
import { TitleBox } from '../elements/stateless';
import renderContent from '../../js/renderConent';

import headshot from '../../media/headshot_med.jpg';
import SocialIconContainer from './SocialIconContainer';


class BioBox extends Component {
    constructor(props){
        super(props);

        this.state = {
            fullBio: false
        }

        this.toggleFullBio = this.toggleFullBio.bind(this);
    }

    toggleFullBio(){
        const toggleLink = document.getElementById("toggle-full-bio")
        const fullBio = !this.state.fullBio;

        toggleLink.innerText = fullBio ? "Short Bio" : "Full Bio"; 

        this.setState({fullBio});
    }
    
    render(){
        const { content } = this.props
        return(
            <div className="inner-content-body bio-box">
                <img className='headshot-image' src={headshot} alt="headshot" />
                {this.state.fullBio ? renderContent(content.fullBio) : renderContent(content.shortBio)}
                <p className="bio-version"><a id="toggle-full-bio" href="#" onClick={this.toggleFullBio}>Full Bio</a></p>
                <SocialIconContainer />
            </div>
        )
    }
} 

export default BioBox