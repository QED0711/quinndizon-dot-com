import React, { Component } from 'react';

// CONTENT
import EVENTS_CONTENT from '../../content/events';

// COMPONENTS
import { TitleBox } from '../elements/stateless';
import EventInfoBoxes from './EventInfoBoxes'


class EventsContainer extends Component {
    render(){
        return(
            <div className="events-container content-container sliding-container">
                <TitleBox title={EVENTS_CONTENT.title} />

                {
                    EVENTS_CONTENT.events.length > 0 ? 
                    <EventInfoBoxes events={EVENTS_CONTENT.events} />
                    :
                    <p>{EVENTS_CONTENT.placeholderMessage}</p>
                }

            </div>
        )
    }
}

export default EventsContainer;