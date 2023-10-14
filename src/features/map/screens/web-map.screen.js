import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
//import { withGoogleMap, GoogleMap } from "react-google-maps";
//import { MapView } from "react-native-goggle-maps";
//import { GoogleMap, Marker } from "react-google-maps";

import { Search } from "../components/search.component";

export const WebMapScreen = ({ navigation, props }) => {
  return (
    <>
      <Search />
      {/* <MapView /> */}
      {/* <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
      </GoogleMap> */}
    </>
  );
};
