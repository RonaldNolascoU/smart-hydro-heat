import { View, Text, StyleSheet } from "react-native";

export function NotificationsScreen() {
     const [notifications, setNotifications] = useState([]);
     return (
          <View>
               {notifications.map((notification, i) => {
                    return <View key={`notification-${i}`}>
                         <View style={styles.notificationDateContainer}>
                              <Text style={styles.notificationDate}>{new Date().toISOString().split("T")[0] === notification.date.toISOString().split("T")[0] ? "Today  •  " : ""}{notification.date.toDateString()}</Text>
                         </View>
                         <View style={styles.container}>
                              <View style={styles.hourContainer}>
                                   <Text>{notification.hour}</Text>
                              </View>
                              <View style={styles.notificationDesc}>
                                   <Text style={styles.title}>{notification.title}</Text>
                                   <Text style={styles.description}>{notification.description}</Text>
                              </View>
                         </View>

                    </View>
               }
               )}
          </View>
     );
}

const styles = StyleSheet.create({
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
