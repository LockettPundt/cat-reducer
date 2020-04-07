import {
  ACTION_SET_ACTIVITY,
} from '../actionTypes';

const initialState = {
  // name: 'Chloe',
  activity: 'napping',
};

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SET_ACTIVITY: {
      const { activity } = action.payload;
      return {
        ...state,
        activity,
      };
    }
    default: {
      return state;
    }
  }
};

export default activityReducer;
