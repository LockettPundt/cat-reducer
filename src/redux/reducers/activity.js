import {
  ACTION_SET_ACTIVITY, ACTION_EAT, ACTION_PLAY, ACTION_NAP,
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
