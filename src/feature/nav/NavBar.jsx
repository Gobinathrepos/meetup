import React, {useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Menu, Container, Button } from 'semantic-ui-react';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';

export default function Navbar ({setFormOpen}) {
  const [authentication, setAuthentication] = useState(false);
  const history = useHistory();

  function handleSignOut() {
    setAuthentication(false);
    history.push('/')
  }
  return (
    <Menu inverted fixed='top' >
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src='/assets/logo.png' alt='logo' style={{marginRight: '0.5em'}}/>
          Meetups
        </Menu.Item>
{/* Events */}
        <Menu.Item name='Events'
          as={NavLink} to='/events'
          style={{color: 'white'}}
        />
        <Menu.Item name='reducer'
          as={NavLink} to='/reducer'
          style={{color: 'white'}}
        />
        {authentication && (
          <Menu.Item
            as={NavLink} to='/createEvent' >
            <Button
            positive inverted content='Create Event'
          />
          </Menu.Item>
        )}
{/* Auth */}
        {authentication ? <SignedInMenu signOut={handleSignOut} /> : <SignedOutMenu setAuthentication={setAuthentication} /> }

      </Container>
    </Menu>
  )
}
