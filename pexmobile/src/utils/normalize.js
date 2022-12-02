/*
This file make the app responsive.
*/

import { Dimensions, Platform, PixelRatio } from 'react-native';

// get the windows dimensions, updates automatically and set the scale
const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const scaleX = SCREEN_WIDTH / 375;
const scaleY = SCREEN_HEIGHT / 812;

// returns the new size based on the scale of the width
function normalize(size) {
  const newSize = size * scaleX;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

// returns the new size based on the scale of the height
export function normalizeHeight(size) {
  const newSize = size * scaleY;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

export default normalize;
