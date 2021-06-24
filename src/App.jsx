import React, { useState } from 'react';
import EventDashboard from './feature/events/eventDashboard/EventDashboard';
import NavBar from './feature/nav/NavBar';
import { Container } from 'semantic-ui-react';



export default function App() {
  const [formOpen, setFormOpen ] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)

  function handleSelectedEvent(event) {
    setSelectedEvent(event)
    setFormOpen(true)
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null)
    setFormOpen(true)
  }

  return (
    <>
      <NavBar setFormOpen={handleCreateFormOpen} />
      <Container className='main'>
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen}
        selectEvent={handleSelectedEvent}
        selectedEvent={selectedEvent}
        />
      </Container>
    </>
  );
}
