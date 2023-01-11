/*
 * @𝔸𝕞𝕚𝕥𝕪 𝕊𝕠𝕗𝕥𝕨𝕒𝕣𝕖 𝕊𝕪𝕤𝕥𝕖𝕞𝕤 𝕃𝕚𝕞𝕚𝕥𝕖𝕕
 * 𝔼𝕞𝕡 𝕀𝕕: 𝔼_𝔽𝕠𝕦𝕣_𝔽𝕠𝕦𝕣_𝕊𝕚𝕩_ℕ𝕚𝕟𝕖
 * @𝔸𝕦𝕥𝕙𝕖𝕣: ℙ𝕒𝕟𝕜𝕒𝕛 𝕂𝕦𝕞𝕒𝕣 ℙ𝕣𝕒𝕛𝕒𝕡𝕒𝕥𝕚
 * @𝔼𝕞𝕒𝕚𝕝: 𝕡𝕜𝕡𝕣𝕒𝕛𝕒𝕡𝕒𝕥𝕚𝟙𝟙𝟡𝟡𝟟@𝕘𝕞𝕒𝕚𝕝.𝕔𝕠𝕞
  
 */
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { CheckBox, Default } from "./defaultPropsType";
import stylePreset from "./style.preset";
import {
  isValidData,
  isValidShowPicker,
  isValidAnimationType,
  isValidPreset,
  isValidCheckBoxType,
  isValidCheckBoxIcons,
  isValidEnableSeach,
} from "./Validations";
export const SelectedOptionPicker = (props) => {
  const {
    data, // [] *
    showPicker, // boolean *
    pickerHeight, // height
    animationType, // 'slide' | 'fade' | 'none'
    preset, //'single' | 'multiple'
    pickerTitle, // 'Select Option'

    primaryColor, // 'color'
    checkBoxType, // CheckBox.Type
    checkBoxIcons, // {check:image,uncheck:image}

    itemTitleKey, // 'String'*
    itemTitleValue, // ''*
    itemTitleStyle, // {Style}

    enableSearch, // boloean
    searchPlaceholder, //'String'
    emptyTitle, // 'String'
    onDonePress, // (item){}
    onCancelPress, // (){}
    onItemChange, // (item){}
  } = props;

  isValidData(data);
  isValidShowPicker(showPicker);
  isValidAnimationType(animationType);
  isValidPreset(preset);
  isValidCheckBoxType(checkBoxType);
  isValidCheckBoxIcons(checkBoxType, checkBoxIcons);
  isValidEnableSeach(enableSearch);
  const picker_data = data || [];
  const picker_preset = preset || Default.Preset.SINGLE;
  const picker_height = pickerHeight || "70%";
  const picker_title = pickerTitle || Default.Value.PICKER_TITLE;
  const animation_type = animationType || Default.Animation.SLIDE;
  const check_box_type = checkBoxType || CheckBox.Type.SQUARE;
  const check_icon = checkBoxIcons?.check || Default.Icon.CHECK;
  const uncheck_icon = checkBoxIcons?.uncheck || Default.Icon.UNCHEK;
  const empty_title = emptyTitle || Default.Value.EMPTY_TITLE;
  const search_placeholder = searchPlaceholder || Default.Search.PLACEHOLDER;

  const isMultiple = picker_preset === "multiple";
  const [searchText, setSearchText] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [multipleData, setMultipleData] = useState([]);
  const listRef = React.useRef();

  useEffect(() => {
    if (!isMultiple && picker_data?.length) {
      const index = picker_data.findIndex(
        (item) => item[itemTitleKey] == itemTitleValue
      );
      if (showPicker && index > -1) {
        listRef.current?.scrollToIndex({
          index: index,
          animated: true,
        });
      }
    }
  }, [showPicker]);

  const onSearchChangeText = (text) => {
    setSearchText(text);
    const filter = picker_data?.filter((item) => {
      const itemData = item[itemTitleKey]
        ? item[itemTitleKey].toUpperCase()
        : "".toUpperCase();
      const textData = text.toUpperCase().trim();
      return itemData.indexOf(textData) > -1;
    });
    setFilterData(filter);
  };

  const multipleSelection = (item, index, isSelected) => {
    if (multipleData.length > 0 && isSelected) {
      let multiple = [...multipleData];
      const deleteIndex = multipleData.findIndex((e) => e === item);
      multiple.splice(deleteIndex, 1);
      setMultipleData(multiple);
    } else {
      let multiple = [...multipleData];
      multiple.push(item);
      setMultipleData(multiple);
    }
  };
  const singleSelection = (item) => {
    onItemChange(item);
  };
  const EmptyList = () => {
    return (
      <View style={stylePreset.emptyOuter}>
        <Text style={stylePreset.emptyTitle}>{empty_title}</Text>
      </View>
    );
  };

  const RenderListItem = (item, index) => {
    let selected = false;
    if (isMultiple) {
      selected = multipleData.includes(item);
    } else {
      selected = item[itemTitleKey] == itemTitleValue;
    }

    return (
      <View style={stylePreset.itemOuter}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            isMultiple
              ? multipleSelection(item, index, selected)
              : singleSelection(item);
          }}
          style={stylePreset.itemInner}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            style={[
              stylePreset.checkBox[check_box_type].uncheck,
              primaryColor
                ? {
                    borderColor: selected ? primaryColor : "#2C2C2C",
                  }
                : { borderColor: selected ? "#06C149" : "#2C2C2C" },
            ]}
            onPress={() => {
              isMultiple
                ? multipleSelection(item, index, selected)
                : singleSelection(item);
            }}
          >
            {check_box_type === CheckBox.Type.ICON && (
              <Image
                style={[
                  stylePreset.checkBox[check_box_type].check,
                  primaryColor && { tintColor: primaryColor },
                  check_icon?.uri != null && { tintColor: null },
                ]}
                source={selected ? check_icon : uncheck_icon}
              />
            )}
            {check_box_type != CheckBox.Type.ICON && selected && (
              <View
                style={[
                  stylePreset.checkBox[check_box_type].check,
                  primaryColor && { backgroundColor: primaryColor },
                ]}
              />
            )}
          </TouchableOpacity>

          <Text
            style={[
              stylePreset.itemTitle[selected ? "check" : "uncheck"],
              { ...itemTitleStyle },
              primaryColor && { color: primaryColor },
              !selected && { color: "#2c2c2c" },
            ]}
          >
            {item[itemTitleKey]}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <Modal
      statusBarTranslucent={true}
      animationType={animation_type}
      transparent={true}
      visible={showPicker}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={stylePreset.mainView}>
        <View style={stylePreset.outerView}>
          <View style={{ flex: 1 }} />
          <View
            style={[
              stylePreset.listOuterView,
              {
                height: picker_height,
              },
            ]}
          >
            <View style={stylePreset.buttonOuter}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  isMultiple ? setMultipleData([]) : "";
                  setSearchText("");
                  onCancelPress();
                }}
                style={[
                  stylePreset.button["secondary"],
                  primaryColor && { borderColor: primaryColor },
                ]}
              >
                <Text
                  style={[
                    stylePreset.buttonTitle["secondary"],
                    primaryColor && { color: primaryColor },
                  ]}
                >
                  {"Cancel"}
                </Text>
              </TouchableOpacity>

              <Text
                style={[
                  stylePreset.headingText,
                  primaryColor && { color: primaryColor },
                ]}
              >
                {picker_title}
              </Text>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  setSearchText("");

                  isMultiple ? onDonePress(multipleData) : onDonePress();
                }}
                style={[
                  stylePreset.button["primary"],
                  primaryColor && { backgroundColor: primaryColor },
                ]}
              >
                <Text style={stylePreset.buttonTitle["primary"]}>{"Done"}</Text>
              </TouchableOpacity>
            </View>

            {enableSearch && (
              <View style={stylePreset.searchOuter}>
                <TextInput
                  placeholder={search_placeholder}
                  style={stylePreset.input}
                  value={searchText}
                  maxLength={50}
                  onChangeText={(text) => onSearchChangeText(text)}
                />
                {searchText !== "" ? (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={stylePreset.searchCloseOuter}
                    onPress={() => {
                      setSearchText("");
                    }}
                  >
                    <Image
                      source={require("./assets/cross.png")}
                      style={stylePreset.close}
                    />
                  </TouchableOpacity>
                ) : null}
              </View>
            )}

            <FlatList
              ref={listRef}
              data={searchText === "" ? picker_data : filterData}
              bounces={false}
              style={{ marginHorizontal: 10 }}
              ListEmptyComponent={<EmptyList />}
              renderItem={({ item, index }) => RenderListItem(item, index)}
              keyExtractor={(item, index) =>
                index.toString() + "list Items" + item.id
              }
              onScrollToIndexFailed={(info) => {
                if (!isMultiple) {
                  const wait = new Promise((resolve) =>
                    setTimeout(resolve, 500)
                  );
                  wait.then(() => {
                    listRef.current?.scrollToIndex({
                      index: info.index,
                      animated: true,
                    });
                  });
                }
              }}
            />
          </View>
        </View>
      </SafeAreaView>
      <SafeAreaView style={{ backgroundColor: "#FFFFFF" }} />
    </Modal>
  );
};
