import React, { Component } from 'react';
import { renderTags, TitleBox } from '../elements/stateless';

// CONTENT
import ABOUT_CONTENT from '../../content/about';

class AboutContainer extends Component {
    
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

        return(
            <div className="about-container">
                
                <TitleBox title={ABOUT_CONTENT.title} />

                {
                    this.state.fullBio ?
                    renderTags(ABOUT_CONTENT.fullBio)
                    :
                    renderTags(ABOUT_CONTENT.shortBio)
                }

                <a id="toggle-full-bio" href="#" onClick={this.toggleFullBio}>Full Bio</a>

            </div>
        )
    }
}

export default AboutContainer;