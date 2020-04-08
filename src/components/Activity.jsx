/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Cats from './Cats';
import AddCat from './AddCat';
import {
  setName, setActivity, play, eat, nap, setNewCat,
} from '../redux/actions';

const Button = styled.button`
  background-color: salmon;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  margin: 1vw 2vw;
  border: solid 2px rgb(23, 23, 23);
`;


const Activity = ({
  setName, setActivity, activity, name, setNewCat,
}) => {
  const [inputActivity, setInputActivity] = useState('');
  const [inputName, setInputName] = useState('');

  const handleName = (e) => {
    setInputName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(inputName);
    setActivity(inputActivity);
    const id = Math.random().toString(36).substring(2, 15)
      + Math.random().toString(36).substring(2, 15);
    setNewCat(id, inputName, inputActivity);
    // console.log('Submitted');
  };

  return (
    <>
      <h1>What is the cat doing?</h1>

      <Cats />
      <Button onClick={() => setInputActivity('eating')}>Eat!</Button>
      <Button onClick={() => setInputActivity('playing')}>Play!</Button>
      <Button onClick={() => setInputActivity('napping')}>Nap!</Button>
      <form onSubmit={handleSubmit}>
        <input value={inputName} placeholder={name.name} onChange={handleName} />

        <Button type="submit">SUBMIT!</Button>
      </form>

    </>
  );
};


const mapStateToProps = (state) => {
  // console.log('this is the state', state);
  const { activity, name } = state;
  // console.log(name, activity);
  return {
    name,
    activity,
  };
};


export default connect(mapStateToProps, {
  setName, setActivity, play, eat, nap, setNewCat,
})(Activity);
