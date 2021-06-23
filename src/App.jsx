import React, { useState } from 'react';
import EventDashboard from './feature/events/eventDashboard/EventDashboard';
import NavBar from './feature/nav/NavBar';
import { Container } from 'semantic-ui-react';



export default function App() {
  const [formOpen, setFormOpen ] = useState(false)

  return (
    <>
      <NavBar setFormOpen={setFormOpen} />
      <Container className='main'>
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </>
  );
}
