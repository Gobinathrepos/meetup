import React from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteEvent } from '../eventActions';

export default function EventListItem({ event }) {
  const dispatch = useDispatch();

  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src={event.hostPhotoURL} />
            <Item.Content>
              <Item.Header content={event.title} />
              <Item.Description>
                  Hosted by {event.hostedBy}
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' /> {event.date}
          <Icon name='marker' /> {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map(attendee => <EventListAttendee attendee={attendee} key={attendee.id} />)}
        </List>
      </Segment>
      <Segment clearing>
        <div>{event.description}</div>
        <Button
        onClick={() => dispatch(deleteEvent(event.id))}
        color='red' content='Delete' floated='right'  />
        <Button
        as={Link} to={`/events/${event.id}`}
        color='teal' content='View' floated='right'  />
      </Segment>
    </Segment.Group>
  )
}
