import { createSelector } from "reselect";

const imageSelector = (state) => state.image;

export const selectImage = createSelector(
  [imageSelector],
  (image) => image.imageUri
);

export const selectName = createSelector(
  [imageSelector],
  (image) => image.name
);

export const selectErrorMessage = createSelector(
  [imageSelector],
  (image) => image.errorMessage
);
