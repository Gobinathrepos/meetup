import React from 'react';
import EventDashboard from './feature/events/eventDashboard/EventDashboard';
import NavBar from './feature/nav/NavBar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router';
import HomePage from './feature/home/HomePage';
import EventDetailedPage from './feature/events/eventDetailed/EventDetailedPage';
import EventForm from './feature/events/eventForm/EventForm';
import Reducer from './feature/reducer/Reducer';
import { useLocation } from 'react-router-dom';


export default function App() {
  const {key} = useLocation();

  return (
    <>
      <Route exact path='/' component={HomePage} />
      {/* anything after the / should use this function */}
      <Route path={'/(.+)'}
        render={() => (
        <>
          <NavBar />
            <Container className='main'>
              <Route exact path='/events' component={EventDashboard} />
              <Route exact path='/reducer' component={Reducer} />
              <Route path='/events/:id' component={EventDetailedPage} />
              <Route path={['/createEvent', '/manage/:id']} component={EventForm} key={key} />
            </Container>
        </>

      )} />
    </>
  );
}
