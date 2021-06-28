import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { increment, decrement } from './testReducer';

export default function Reducer() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.test.data)

  return (
    <>
     <h2>Testing 123</h2>
     <h4>The data is: {data}</h4>
     <Button onClick={() => dispatch(increment(5))} content='Increment' color='green' />
     <Button onClick={() => dispatch(decrement(10))} content='Decrement' color='red' />
    </>
  )
}
