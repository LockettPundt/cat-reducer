import React, { useState } from 'react';
import { connect } from 'react-redux';

const Cats = ({ cats }) => {
  console.log(cats);

  return (
    <div>
      {Object.values(cats).map((cat, index) => (
        <p key={index + 1}>
          {cat.name}
          {' '}
          is
          {' '}
          {cat.activity}
        </p>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('inside of the cats component', state);
  const { cats } = state;
  // console.log(cats);
  return { cats };
};

export default connect(mapStateToProps, null)(Cats);
