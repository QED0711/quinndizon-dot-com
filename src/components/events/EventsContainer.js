import React, { Component } from 'react';

// CONTENT
import EVENTS_CONTENT from '../../content/events';

// COMPONENTS
import { TitleBox } from '../elements/stateless';

class EventsContainer extends Component {
    render(){
        return(
            <div className="events-container">
                <TitleBox title={EVENTS_CONTENT.title} />
            </div>
        )
    }
}

export default EventsContainer;