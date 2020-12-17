import { SET_IMAGE } from "./image-actions";
import { SET_NAME } from "./image-actions";
import { SET_ERROR_MESSAGE } from "./image-actions";

const INITIAL_STATE = {
  imageUri: null,
  name: "",
  errorMessage: "",
};

export const imageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_IMAGE:
      return {
        ...state,
        imageUri: action.payload,
      };
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
