import React from 'react'
import { Segment, Container, Header, Image, Button, Icon } from 'semantic-ui-react'

export default function HomePage({history}) {
  return (
    <Segment inverted textAlign='center' vertical className='homepage'>
      <Container>
        <Header as='h1' inverted>
          <Image size='massive' src='/assets/meetup.png' style={{marginbottom: 12, width: '30em', height: '20em'}} />
          Meetup Events
        </Header>
        <Button
        onClick={() => history.push('/events')}
        size='huge' inverted>
          Join Meetup
          <Icon name='right arrow' inverted />
        </Button>
      </Container>
    </Segment>
  )
}
