import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setNewCat } from '../redux/actions';

const Button = styled.button`
  background-color: salmon;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  margin: 1vw 2vw;
  border: solid 2px rgb(23, 23, 23);
`;

const AddCat = ({ setNewCat }) => (
  <form>
    {/* <input value={inputName} placeholder={name.name} onChange={handleName} />
    <input value={inputActivity} placeholder={activity.activity} onChange={handleActivity} /> */}
    <Button type="submit">Add new Cat!</Button>
  </form>
);


export default connect(null, { setNewCat })(AddCat);
