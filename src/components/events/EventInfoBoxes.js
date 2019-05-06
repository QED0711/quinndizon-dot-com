import React from 'react';

import EventBox from './EventBox';

const EventInfoBoxes = ({ events }) => {
    const renderEventsBoxes = (events) => {
        return events.map((event,i) => {
            return <EventBox key={i} event={event} />
        })
    }
    return(
        <div className="event-info-boxes content-selector-container">
            {renderEventsBoxes(events)}  
        </div>
    )
}

export default EventInfoBoxes