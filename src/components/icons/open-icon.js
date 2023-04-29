import React from "react";
import { Platform } from "react-native";
import { SvgXml as SVG } from "react-native-svg";
import { SvgXml } from "react-native-svgxml-web";
import open from "../../../assets/open";

const OpenIcon = ({ width = 24, height = 24 }) => {
  if (Platform.OS === "web") {
    return (
      <>
        <SvgXml width={width} height={height} xml={open} />
      </>
    );
  } else {
    return (
      <>
        <SVG xml={open} width={width} height={height} />
      </>
    );
  }
};
export default OpenIcon;
