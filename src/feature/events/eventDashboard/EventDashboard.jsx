import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from '../eventList/EventList';
import { sampleData } from '../../../app/api/sampleData';


export default function EventDashboard() {
  const [events, setEvents] = useState(sampleData);

  // creating an events
  // function handleCreateEvents(event) {
  //   setEvents([...events, event])
  // }

  // function handleUpdateEvent(updatedEvent) {
  //   setEvents(events.map(e => e.id === updatedEvent.id ? updatedEvent : e ))
  // }

  function handleDeleteEvent(eventId) {
    setEvents(events.filter(e => e.id !== eventId));
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events}
          deleteEvent={handleDeleteEvent}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Event Filter</h2>
      </Grid.Column>
    </Grid>
  )
}
