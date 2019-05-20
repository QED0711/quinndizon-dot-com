import React, { Component } from 'react';
import { TitleBox } from '../elements/stateless';
import renderContent from '../../js/renderConent';

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
            <div className="bio-box">
                {this.state.fullBio ? renderContent(content.fullBio) : renderContent(content.shortBio)}
                <p className="bio-version"><a id="toggle-full-bio" href="#" onClick={this.toggleFullBio}>Full Bio</a></p>
            </div>
        )
    }
} 

export default BioBox