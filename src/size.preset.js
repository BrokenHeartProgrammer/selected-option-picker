/*
 * @𝔸𝕦𝕥𝕙𝕖𝕣: ℙ𝕒𝕟𝕜𝕒𝕛 𝕂𝕦𝕞𝕒𝕣 ℙ𝕣𝕒𝕛𝕒𝕡𝕒𝕥𝕚
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
