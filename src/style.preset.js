import { scaleSize, fontSize } from "./size.preset";

const primary_color = "#06C149";
const title_color = "#2C2C2C";
const white_color = "#FFFFFF";
const checkbox = {
  alignItems: "center",
  justifyContent: "center",
  height: scaleSize(20),
  width: scaleSize(20),
  borderWidth: 1,
  borderColor: title_color,
  marginRight: scaleSize(12),
  borderColor: title_color,
};
const uncheck = {
  width: scaleSize(10),
  height: scaleSize(10),
  backgroundColor: primary_color,
};
const title = {
  fontSize: fontSize(14),
  marginRight: 15,
};
const buttons = {
  height: scaleSize(35),
  width: scaleSize(80),
  borderRadius: scaleSize(6),
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 1,
  marginHorizontal: 10,
};
const buttonTitle = {
  fontWeight: "500",
  fontSize: fontSize(14),
};
const stylePreset = {
  itemOuter: {
    borderBottomColor: "#f1f1f1",
    borderBottomWidth: 1,
    paddingVertical: scaleSize(3),
  },
  itemInner: {
    flexDirection: "row",
    padding: scaleSize(10),
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  emptyOuter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: scaleSize(150),
  },
  mainView: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
  },

  outerView: {
    flex: 1,
    alignItems: "flex-end",
    flexDirection: "column",
  },
  listOuterView: {
    backgroundColor: "#FFFFFF",
    height: "70%",
    width: "100%",
  },
  buttonOuter: {
    paddingVertical: scaleSize(10),
    borderBottomColor: "#63636333",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: scaleSize(10),
  },
  button: {
    primary: {
      ...buttons,
      backgroundColor: primary_color,
      borderWidth: 0,
    },
    secondary: {
      ...buttons,
      backgroundColor: white_color,
      borderColor: primary_color,
    },
  },
  buttonTitle: {
    primary: {
      ...buttonTitle,
      color: white_color,
    },
    secondary: {
      ...buttonTitle,
      color: primary_color,
    },
  },
  emptyTitle: {
    fontSize: fontSize(14),
    color: title_color,
    fontWeight: "500",
  },
  checkBox: {
    square: {
      uncheck: {
        ...checkbox,
        borderRadius: 0,
      },
      check: {
        ...uncheck,
      },
    },
    circle: {
      uncheck: {
        ...checkbox,
        borderRadius: scaleSize(10),
      },
      check: {
        ...uncheck,
        borderRadius: scaleSize(5),
      },
    },
    icon: {
      uncheck: {
        ...checkbox,
        borderWidth: 0,
        height: scaleSize(20),
        width: scaleSize(20),
      },
      check: {
        height: "100%",
        width: "100%",
        tintColor: primary_color,
      },
    },
  },
  itemTitle: {
    check: {
      ...title,
      color: primary_color,
      fontWeight: "500",
    },
    uncheck: {
      ...title,
      color: title_color,
      fontWeight: "300",
    },
  },

  headingText: {
    flex: 1,
    fontSize: fontSize(15),
    fontWeight: "bold",
    color: primary_color,
    textAlign: "center",
  },

  searchOuter: {
    marginHorizontal: scaleSize(10),
    marginBottom: scaleSize(5),
    borderWidth: 1,
    height: scaleSize(45),
    alignItems: "center",
    paddingHorizontal: scaleSize(5),
    borderRadius: scaleSize(6),
    borderColor: "#63636333",
    flexDirection: "row",
  },
  input: {
    paddingHorizontal: scaleSize(12),
    fontWeight: "300",
    fontSize: fontSize(14),
    color: "#000000",
    flex: 1,
  },
  searchCloseOuter: {
    height: scaleSize(35),
    width: scaleSize(25),
    justifyContent: "center",
    alignItems: "center",
  },
  close: {
    height: scaleSize(12),
    width: scaleSize(12),
    tintColor: title_color,
  },
};
export default stylePreset;
