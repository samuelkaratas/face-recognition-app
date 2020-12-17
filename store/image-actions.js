export const SET_IMAGE = "SET_IMAGE";
export const SET_NAME = "SET_NAME";
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";

export const setImage = (uri) => ({
  type: SET_IMAGE,
  payload: uri,
});

export const setName = (name) => ({
  type: SET_NAME,
  payload: name,
});

export const setErrorMessage = (mes) => ({
  type: SET_ERROR_MESSAGE,
  payload: mes,
});
