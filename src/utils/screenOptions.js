import { iconsName } from "../constant/iconsName";
import { Icon } from "react-native-elements";

export function iconScreenOptions(route, color, size) {
  let iconName;

  iconName = iconsName[route.name];

  return (
    <Icon type="material-community" name={iconName} size={size} color={color} />
  );
}
