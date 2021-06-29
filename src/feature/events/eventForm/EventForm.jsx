import React from 'react'
import { Segment, Header, Button } from 'semantic-ui-react'
import cuid from 'cuid';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { createEvent, updateEvent } from '../eventActions';
import MyTextInput from '../../../app/form/MyTextInput';
import MyTextArea from '../../../app/form/MyTextArea';
import MySelectInput from '../../../app/form/MySelectInput';
import { categoryData } from '../../../app/api/categoryOption';
import MyDatePicker from '../../../app/form/MyDatePicker';

export default function EventForm({ match, history }) {
  const dispatch = useDispatch();
  const selectedEvent = useSelector(state => state.event.events.find(e => e.id === match.params.id));

  const initialValue = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: ''
  }

  const validationSchema = Yup.object({
    title: Yup.string().required('*you must provide the title'),
    category: Yup.string().required('*you must provide the category'),
    description: Yup.string().required('*you must provide the description'),
    city: Yup.string().required('*you must provide the city'),
    venue: Yup.string().required('*you must provide the venue'),
    location: Yup.string().required('*you must provide the location'),
    date: Yup.string().required('*pick up a date')
  })

  return (
    <Segment clearing>
        <Header content={selectedEvent ? 'Edit new event' : 'Create new event'} />
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={values => {
          selectedEvent ? dispatch(updateEvent({...selectedEvent, ...values})) :
          dispatch(createEvent({
          ...values,
          id: cuid(),
          hostedBy: 'Bob',
          attendees: [],
          hostPhotoURL: '/assets/user.png'
        }));
        history.push('/events');
      }}
      >
          <Form className='ui form'>
          <Header sub color='teal' content='Event Details' />
            <MyTextInput name='title' placeholder='Event title' />
            <MySelectInput name='category' placeholder='Event category' options={categoryData} />
            <MyTextArea name='description' placeholder='Description' />
            
            <Header sub color='teal' content='Event Location Details' />
            <MyTextInput name='city' placeholder='City' />
            <MyTextInput name='venue' placeholder='Venue' />

            <MyDatePicker
             name='date'
             placeholderText='Event date'
             timeFormat='HH:mm'
             showTimeSelect
             timeCaption='time'
             dateFormat='MMMM d, yyyy h:mm a'
             />

          <Button type='submit' floated='right' positive content='Submit' />

          <Button
           as={Link} to='/events'
           type='submit'
           floated='right'
           content='Cancel' />
          </Form>
        </Formik>
    </Segment>
  )
}
