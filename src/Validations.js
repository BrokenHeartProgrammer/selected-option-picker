/*
 * @𝔸𝕦𝕥𝕙𝕖𝕣: ℙ𝕒𝕟𝕜𝕒𝕛 𝕂𝕦𝕞𝕒𝕣 ℙ𝕣𝕒𝕛𝕒𝕡𝕒𝕥𝕚
 */

function showError(error){
  throw new Error(error)
}
export function isValidData (data){
  if(!Array.isArray(data)){
    showError('The invalid `data` value should be an array of objects')
  }
}
export function isValidShowPicker(value){
  if(value !== true && value !== false){
    showError('The valid value for `showPicker` in `SelectedOptionPicker` component should be a boolean type')
  }
}
export function isValidAnimationType(value){
  if(value !== 'slide' && value !== 'fade' && value !== 'none'){
    showError('The valid value for `animationType` in `SelectedOptionPicker` component should be one of: ( "slide", "fade", "none")')
  }
}
export function isValidPreset(value){
  if(value !== 'single' && value !== 'multiple'){
    showError('The valid value for `preset` in `SelectedOptionPicker` component should be one of: ( "single", "multiple",)')
  }
}
export function isValidCheckBoxType(value){
  if(value !== 'circle' && value !== 'square' && value !== 'icon'){
    showError('The valid value for `checkBoxType` in `SelectedOptionPicker` component should be one of: ( "circle", "square", "icon")')
  }
}
export function isValidCheckBoxIcons(checkBoxType,value){
  if(checkBoxType === 'icon' && value && (!value.check || !value.uncheck) ){
    showError('The invalid object for `checkBoxIcons` in `SelectedOptionPicker` component')
  }
}

export function isValidEnableSeach(value){
  if(value !== true && value !== false){
    showError('The valid value for `enableSearch` in `SelectedOptionPicker` component should be a boolean type')
  }
}