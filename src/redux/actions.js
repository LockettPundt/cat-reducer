import {
  ACTION_SET_ACTIVITY, ACTION_SET_NAME, ACTION_ADD_CAT, ACTION_EAT, ACTION_NAP, ACTION_PLAY,
} from './actionTypes';

export const setName = (name) => ({
  type: ACTION_SET_NAME,
  payload: {
    name,
  },
});

export const setActivity = (activity) => ({
  type: ACTION_SET_ACTIVITY,
  payload: {
    activity,
  },
});

export const nap = () => ({
  type: ACTION_NAP,
});

export const eat = () => ({
  type: ACTION_EAT,
  payload: {
    activity: 'eating',
  },
});

export const play = () => ({
  type: ACTION_PLAY,
});


export const setNewCat = (id, name, activity) => ({
  type: ACTION_ADD_CAT,
  payload: {
    id,
    name,
    activity,
  },
});
