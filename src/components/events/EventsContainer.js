import React, { Component } from 'react';

// CONTENT
import EVENTS_CONTENT from '../../content/events';

// COMPONENTS
import { TitleBox } from '../elements/stateless';
import EventInfoBoxes from './EventInfoBoxes'


class EventsContainer extends Component {
    render(){
        return(
            <div className="events-container content-container">
                <TitleBox title={EVENTS_CONTENT.title} />

                <EventInfoBoxes events={EVENTS_CONTENT.events} />
            </div>
        )
    }
}

export default EventsContainer;