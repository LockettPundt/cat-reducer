import {
  ACTION_SET_ACTIVITY, ACTION_SET_NAME,
} from '../actionTypes';

const initialState = {
  name: 'Chloe',
  activity: 'napping',
};

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SET_NAME: {
      const { name } = action.payload;
      // console.log(name);
      return {
        ...state,
        name,
      };
    }
    case ACTION_SET_ACTIVITY: {
      const { activity } = action.payload;
      // console.log(activity);
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
