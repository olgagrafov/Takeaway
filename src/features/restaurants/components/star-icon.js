import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const StarIcon = ({ size = 24, fill = "yellow" }) => {
  return (
    <View>
      <Svg width={size} height={size} viewBox="0 0 24 24" fill={fill}>
        <Path d="M12 17.27l-4.54 2.76 1.37-4.93L4.63 9.63l4.93-.42L12 5.5l2.44 3.71 4.93.42-3.2 2.47 1.37 4.93L12 17.27z" />
      </Svg>
    </View>
  );
};

export default StarIcon;
