/*
 * @𝔸𝕞𝕚𝕥𝕪 𝕊𝕠𝕗𝕥𝕨𝕒𝕣𝕖 𝕊𝕪𝕤𝕥𝕖𝕞𝕤 𝕃𝕚𝕞𝕚𝕥𝕖𝕕
 * @𝔼𝕞𝕡 𝕀𝕕: 𝔼_𝔽𝕠𝕦𝕣_𝔽𝕠𝕦𝕣_𝕊𝕚𝕩_ℕ𝕚𝕟𝕖
 * @𝔸𝕦𝕥𝕙𝕖𝕣: ℙ𝕒𝕟𝕜𝕒𝕛 𝕂𝕦𝕞𝕒𝕣 ℙ𝕣𝕒𝕛𝕒𝕡𝕒𝕥𝕚
 * @𝔼𝕞𝕒𝕚𝕝: 𝕡𝕜𝕡𝕣𝕒𝕛𝕒𝕡𝕒𝕥𝕚𝟙𝟙𝟡𝟡𝟟@𝕘𝕞𝕒𝕚𝕝.𝕔𝕠𝕞
  
 */
import {Dimensions, PixelRatio} from 'react-native';

const {width} = Dimensions.get('window');
const scale = width / 375;

export function fontSize(size) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
export function scaleSize(size) {
  return (width / 375) * size;
}
