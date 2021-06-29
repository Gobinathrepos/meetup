import React, {useState} from 'react'
import { Segment, Header, Button, FormField, Label } from 'semantic-ui-react'
import cuid from 'cuid';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { createEvent, updateEvent } from '../eventActions';


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
    title: Yup.string().required('*you must provide the title')
  })


//   function handleFormSubmit() {
//     selectedEvent ? dispatch(updateEvent({...selectedEvent, ...values})) :
//     dispatch(createEvent({
//     ...values,
//     id: cuid(),
//     hostedBy: 'Bob',
//     attendees: [],
//     hostPhotoURL: '/assets/user.png'
//   }));
//   history.push('/events');
// }

  return (
    <Segment clearing>
        <Header content={selectedEvent ? 'Edit new event' : 'Create new event'} />
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={values => console.log(values)}
        >
          <Form className='ui form'>
          <FormField>
            <Field name='title' placeholder='Event title' />
              <ErrorMessage name='title' render={error => <Label basic color='red' content={error}/>}
              />
          </FormField>
          <FormField>
            <Field name='category' placeholder='Category' />
          </FormField>
          <FormField>
            <Field name='description' placeholder='Description' />
          </FormField>
          <FormField>
            <Field name='city' placeholder='City' />
          </FormField>
          <FormField>
            <Field name='venue' placeholder='Venue' />
          </FormField>
          <FormField>
            <Field name='date' placeholder='Date' type='date' />
          </FormField>

          <Button
          type='submit' floated='right' positive content='Submit' />
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
