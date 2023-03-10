/*
 * @πΈπ¦π₯πππ£: βπππππ ππ¦πππ£ βπ£ππππ‘ππ₯π
 */
import { Dimensions, PixelRatio } from "react-native";

const { width } = Dimensions.get("window");
const scale = width / 375;

export function fontSize(size) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
export function scaleSize(size) {
  return (width / 375) * size;
}
