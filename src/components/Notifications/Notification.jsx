import React from "react";
import { View, Text } from "react-native";
import { styles } from "./Notification.styles";
import notifications from "./notificationTest"

export function Notifications() {
    return (
        <View>
            {notifications.map((notification, i) =>
                <View key={`notification-${i}`}>
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

                </View>)}
        </View>
    );
}