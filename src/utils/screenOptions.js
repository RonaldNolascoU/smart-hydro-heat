import React from "react";
import { Icon } from "react-native-elements";
import { iconsName } from "../constant/iconsName";

export function iconScreenOptions(route, color, size) {
  const iconName = iconsName[route.name];

  return (
    <Icon type="material-community" name={iconName} size={size} color={color} />
  );
}
