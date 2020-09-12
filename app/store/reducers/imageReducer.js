import { LOAD_IMAGES } from '../types';

const INITIAl_STATE = {
  allImages: []
};

export const imageReducer = (state = INITIAl_STATE, action) => {
  switch (action.type) {
    case LOAD_IMAGES:
      return {
        ...state,
        allImages: action.payload
      };
    default:
      return state;
  }
};
