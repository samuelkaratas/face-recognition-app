import { SET_IMAGE } from "./image-actions";

const INITIAL_STATE = {
  imageUri: null,
};

export const imageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_IMAGE:
      return {
        ...state,
        imageUri: action.payload,
      };
    default:
      return state;
  }
};
