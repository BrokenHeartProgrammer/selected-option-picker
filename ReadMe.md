# selected-option-picker
This component library is created for the select single or multiple option from the list of options in Android/iOS.

## Examples
<p align="left">
  <img width=200 title="Circle Checkbox in iOS" src="https://github.com/BrokenHeartProgrammer/selected-option-picker/blob/master/src/images/iOS Circle Check.png">
  <img width=200 title="Squire Checkbox in iOS" src="https://github.com/BrokenHeartProgrammer/selected-option-picker/blob/master/src/images/iOS Square Check.png">
  <img width=200 title="Icon Checkbox with search in iOS" src="https://github.com/BrokenHeartProgrammer/selected-option-picker/blob/master/src/images/iOS Icon Check with Search.png">
</p>

## Add it to your project

Import library

### Run

- npm i selected-option-picker 

#### or

- yarn add selected-option-picker

## Usage

```javascript
import SelectedOptionPicker from 'selected-option-picker';
```

### Select Single Option

Usage of the single value picker

```javascript
<SelectedOptionPicker
  preset={'single'}
  pickerTitle={'Select Country Name'}
  showPicker={true}
/>
```