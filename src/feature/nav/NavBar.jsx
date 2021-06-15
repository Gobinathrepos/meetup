import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import '../../App.css';

const Navbar = () => {
  return (
    <Menu fixed='top' >
      <Container>
        <Menu.Item header style={{color: 'white'}}>
          <img src='/assets/logo.png' alt='logo' style={{marginRight: '0.5em'}}/>
          Meetups
        </Menu.Item>
{/* Events */}
        <Menu.Item name='Events' />
          <Menu.Item>
            <Button positive inverted content='Create Event' />
          </Menu.Item>
{/* Auth */}
          <Menu.Item position='right'>
            <Button basic inverted content='Login' />
            <Button basic inverted content='Register' style={{marginLeft: '0.5em'}} />
          </Menu.Item>
      </Container>
    </Menu>
  )
}

export default Navbar;
