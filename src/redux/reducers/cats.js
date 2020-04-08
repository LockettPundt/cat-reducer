import { ACTION_ADD_CAT } from '../actionTypes';

const num = Math.random().toString(36).substring(2, 15)
  + Math.random().toString(36).substring(2, 15);

const initialState = {
  [num]: {
    name: 'Chloe',
    activity: 'napping',
  },


};

const addCatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_ADD_CAT: {
      const { name, activity, id } = action.payload;
      return {
        ...state,
        [id]: {
          name,
          activity,
        },
      };
    }
    default:
      return state;
  }
};


export default addCatReducer;
