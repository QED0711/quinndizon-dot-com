import React, { Component } from 'react';

// CONTENT
import LISTEN_CONTENT from '../../content/listen';

// COMPONENTS
import { TitleBox } from '../elements/stateless';
import ListenBoxes from './ListenBoxes';

class ListenContainer extends Component {
    render(){
        const { match } = this.props
        console.log(match)
        return(
            <div className="listen-container content-container">
                <TitleBox title={LISTEN_CONTENT.title} />

                <ListenBoxes works={LISTEN_CONTENT.works} />
            </div>
        )
    }
}

export default ListenContainer;