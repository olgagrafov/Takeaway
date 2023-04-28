import React from "react";
import { Platform } from "react-native";
import { SvgXml as SVG } from "react-native-svg";
import { SvgXml } from "react-native-svgxml-web";
import open from "../../../../assets/open";

const OpenIcon = () => {
  if (Platform.OS === "web") {
    return (
      <>
        <SvgXml width={40} height={40} xml={open} />
      </>
    );
  } else {
    return (
      <>
        <SVG xml={open} />
      </>
    );
  }
};
export default OpenIcon;
