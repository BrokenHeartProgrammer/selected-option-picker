# selected-option-picker
This React-Native component library is created for the select single or multiple option from the list of options in Android/iOS.

## Examples
<p align="left">
  <img width=200 title="Circle Checkbox in iOS" src="https://github.com/BrokenHeartProgrammer/selected-option-picker/blob/master/src/images/iOS Circle Check.png">
  <img width=200 title="Squire Checkbox in iOS" src="https://github.com/BrokenHeartProgrammer/selected-option-picker/blob/master/src/images/iOS Square Check.png">
  <img width=200 title="Icon Checkbox with search in iOS" src="https://github.com/BrokenHeartProgrammer/selected-option-picker/blob/master/src/images/iOS Icon Check with Search.png">
</p>

# Install

## Step 1

```bash
npm i selected-option-picker --save
```
or 
```bash
yarn add selected-option-picker 
```
## Step 2

### iOS

```bash
cd ios
pod install
```
## Usage
Import library

```javascript
import SelectedOptionPicker from 'selected-option-picker';
```

## Usage of the single or multiple value picker

Create required state variables
```javascript
const [showCountryPicker, setShowCountryPicker] = useState(false);
const [selectedCountry, setSelectedCountry] = useState('');
const [countryData, setCountryData] = useState([]);
```
Usage of the single value picker

```javascript
<View>
  <Button
    title={'Show Country Picker'}
    onPress={() => setShowCountryPicker(true)}
  />

  <SelectedOptionPicker
    showPicker={showCountryPicker} 
    data={countryData} 
    pickerTitle={'Select Country'} 
    checkBoxType={'circle'} 
    itemTitleKey={'name'} 
    itemTitleValue={selectedCountry} 
    enableSearch={true} 
    searchPlaceholder={'Search country'} 
    emptyTitle={'No Country(s) Found'} 
    onDonePress={() => setShowCountryPicker(false)} 
    onCancelPress={() => setShowCountryPicker(false)} 
    onItemChange={item => setSelectedCountry(item.name)} 
  />
</View>
```

### Request Object



| Property                  | Required      |                  Type                   | Description                                     | 
| ------------------------- | :------------ | :-------------------------------------- | :---------------------------------------------- |
| `showPicker`              | **Yes**       | bool (default false)                    | Show or hide picker                             |
| `data`                    | **Yes**       | array (default [])                      | An array of objects with similar properties to showing the list |
| `itemTitleKey`                    | **Yes**       | string                       | Name of the key to showing the title of the item. Using this key the layout of the selected items will be updated |
| `itemTitleValue`                    | **Yes**       | string                       | Value or title of the selected item to compare the selected items and update the list layout |
| `itemTitleStyle`                    | No       | style object                        | Style object for `Text` to over-ride the style of the list title |
| `pickerHeight`            | No      | `height` (default `70%` of screen height) | Optional properties to change the `height` of the picker accepted value is `Number` or percentage in `String` as below <br> `pickerHeight='50%'` or <br> `pickerHeight=450` |
| `animationType`            | No      | string (default `slide`) | Optional property to change the animation of the picker when showing the picker. Available values are `slide`,  `fade`,  `none` |
| `preset`            | No      | string (default `single`) | This property is for changing the option of selecting items single or multiple. available options are `single`, `multiple` |
| `pickerTitle`            | No      | string (default `Select Option`) | To show the title of the picker |
| `primaryColor`            | No      | color (default `#06C149`) | The primary color of the picker you can change it according to your app |
| `checkBoxType`            | No      | string (default `circle`) | Using this property you can change the type of the checkbox in the list. Available values are `circle`, `square`, `icon` |
| `checkBoxIcons`            | No      | object (default `{check:image,uncheck:image}`) | This property enables when you `checkBoxType` is `icon`. You can override the default icons of the checkbox by providing the following format value object of local images `checkBoxIcons={{check: image, uncheck: image}}` or remote images `checkBoxIcons={{check: {uri: URL},uncheck: {uri: URL}}}` |
| `enableSearch`            | No      | bool (default `false`) | Using this property you can enable or disable the search feature |
| `searchPlaceholder`            | No      | string (default `Search here`) | This property work when `enableSerach` is `true`. Using this you can change the placeholder of the search input field |
| `emptyTitle`            | No      | string (default `No Record(s) Found`) | To change the title when there is no item |
| `onDonePress`            | **Yes**      | callback function  | A callback function to return the selected item(s) of the list |
| `onItemChange`           | **Yes**      | callback function | A callback function to return the selected item when selection of item changed in the list |
| `onCancelPress`            | **Yes**      | function | This function called when cancel button pressed in picker |



## License
*MIT*