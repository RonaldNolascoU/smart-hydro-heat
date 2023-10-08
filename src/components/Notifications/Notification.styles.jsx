import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    notificationDateContainer: {
         backgroundColor: "#69708A",
         padding: 10,
         marginTop: 2,
    },
    notificationDate: {
         color: "#fff",
         fontWeight: "500",
         fontSize: 14,
    },
    container: {
         display: "flex",
         flexDirection: "row",
         paddingVertical: 20,
    },
    hourContainer: {
         width: "25%",
         paddingLeft: 20,
         paddingHorizontal: 10,
         borderRightWidth: 1,
         borderRightColor: "#dcdcdc",
         paddingVertical: 10,
    },
    notificationDesc: {
         width: "75%",
         paddingHorizontal: 10,
         paddingVertical: 10,
    },
    title: {
         fontSize: 20,
    },
    description: {
         fontSize: 14,
         color: "#a0a0a0",
    }
})
