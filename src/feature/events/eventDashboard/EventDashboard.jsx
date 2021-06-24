import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from '../eventList/EventList';
import EventForm from '../eventForm/EventForm';
import { sampleData } from '../../../app/api/sampleData';


export default function EventDashboard({formOpen, setFormOpen, selectEvent, selectedEvent}) {
  const [events, setEvents] = useState(sampleData);

  // creating an events
  function handleCreateEvents(event) {
    setEvents([...events, event])
  }

  function handleUpdateEvent(updatedEvent) {
    setEvents(events.map(e => e.id === updatedEvent.id ? updatedEvent : e ))
    selectEvent(null);
  }

  function handleDeleteEvent(eventId) {
    setEvents(events.filter(e => e.id !== eventId));
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} selectEvent={selectEvent}
          deleteEvent={handleDeleteEvent}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && (
        <EventForm
        setFormOpen={setFormOpen}
        setEvents={setEvents}
        createEvents={handleCreateEvents}
        selectedEvent={selectedEvent}
        updatedEvent={handleUpdateEvent}
        key={selectedEvent ? selectedEvent.id : null}
        />
        )}
      </Grid.Column>
    </Grid>
  )
}
