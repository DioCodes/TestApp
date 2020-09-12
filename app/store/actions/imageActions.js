import { LOAD_IMAGES } from '../types';
import { getImages } from '../../db';

export const loadImages = () => {
  return async (dispatch) => {
    const images = await getImages();

    dispatch({
      type: LOAD_IMAGES,
      payload: images
    });
  };
};
