import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './testReducer';

export default function Reducer() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data)

  return (
    <>
     <h2>Testing 123</h2>
     <h4>The data is: {data}</h4>
     <Button onClick={() => dispatch({type: INCREMENT_COUNTER})} content='Increment' color='green' />
     <Button onClick={() => dispatch({type: DECREMENT_COUNTER})} content='Decrement' color='red' />
    </>
  )
}
