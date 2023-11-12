import React from "react";
import { View, ScrollView, Text } from "react-native";
import { styles } from "./Notification.styles";
import { useEffect } from "react";
import { useState } from "react";
import Toast from 'react-native-toast-message';
import notificationService from "../../services/notification-service";

export function Notifications() {
     const [notifications, setNotifications] = useState([]);
     useEffect(async () => {
          try {
               let response = await notificationService.getNotifications();
               setNotifications(response);
          } catch (error) {
               console.log({ error });
               Toast.show({
                    type: 'error',
                    text1: `Error`,
                    text2: error?.message || 'Something went wrong',
               });
          }
     }, [])
     return (
          <ScrollView>
               {notifications.map((notification, i) =>
                    <View key={`notification-${i}`}>
                         <View style={styles.notificationDateContainer}>
                              <Text style={styles.notificationDate}>{new Date().toISOString().split("T")[0] === notification.date ? "Today  •  " : ""}{notification.date.split("-").reverse().join("-")}</Text>
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

                    </View>)}
          </ScrollView>
     );
}