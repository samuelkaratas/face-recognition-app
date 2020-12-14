import { createSelector } from "reselect";

const imageSelector = (state) => state.image;

export const selectImage = createSelector(
  [imageSelector],
  (image) => image.imageUri
);
