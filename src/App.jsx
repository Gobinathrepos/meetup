import React, { useState } from 'react';
import EventDashboard from './feature/events/eventDashboard/EventDashboard';
import NavBar from './feature/nav/NavBar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router';
import HomePage from './feature/home/HomePage';
import EventDetailedPage from './feature/events/eventDetailed/EventDetailedPage';
import EventForm from './feature/events/eventForm/EventForm';


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
      <Route exact path='/' component={HomePage} />
      {/* anything after the / should use this function */}
      <Route path={'/(.+)'}
        render={() => (
        <>
          <NavBar setFormOpen={handleCreateFormOpen} />
            <Container className='main'>

              <Route exact path='/events' component={EventDashboard} />
              <Route path='/events/:id' component={EventDetailedPage} />
              <Route path={['/createEvent', '/manage/:id']} component={EventForm} />
            </Container>
        </>

      )} />
    </>
  );
}
