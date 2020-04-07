/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  setName, setActivity,
} from '../redux/actions';

const Button = styled.button`
  background-color: salmon;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  margin: 1vw 2vw;
  border: solid 2px rgb(23, 23, 23);
`;


const Activity = ({
  activity, name, setName, setActivity,
}) => {
  const [inputActivity, setInputActivity] = useState(activity);
  const [inputName, setInputName] = useState(name);

  const handleName = (e) => {
    setInputName(e.target.value);
  };

  const handleActivity = (e) => {
    setInputActivity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(inputName);
    setActivity(inputActivity);
    console.log('Submitted');
  };

  return (
    <>
      <h1>What is the cat doing?</h1>
      <p>
        {name}
        {' '}
        is.....
        {activity}
      </p>
      <form onSubmit={handleSubmit}>
        <input value={inputName} placeholder="Enter a name" onChange={handleName} />
        <input value={inputActivity} placeholder="enter an activity" onChange={handleActivity} />
        <Button type="submit">SUBMIT!</Button>
      </form>

    </>
  );
};


const mapStateToProps = (state) => {
  const { activity, name } = state;
  return activity;
};


export default connect(mapStateToProps, { setName, setActivity })(Activity);
