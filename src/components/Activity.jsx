import React from 'react';
import { connect } from 'react-redux';
import { eat, nap, play } from '../redux/actions';
import styled from 'styled-components';

const Button = styled.button`
  background-color: salmon;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  margin: 0 2vw;
  border: solid 2px rgb(23, 23, 23);
`
const Activity = ({ activity, eat, play, nap }) => {
  
  return (
    <>
      <h1>What is the cat doing?</h1>
      <p>The cat is.....{activity}</p>
      <Button onClick={() => eat()}>Eat!</Button>
      <Button onClick={() => play()}>Play!</Button>
      <Button onClick={() =>  nap()}>Nap!</Button>
    </>
  );
}

const mapStateToProps = state => {
  const { activity } = state;
  return activity;
}


export default connect(mapStateToProps, { eat, play, nap })(Activity);          