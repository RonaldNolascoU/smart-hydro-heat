import React from 'react'
import { View} from 'react-native'
import { List } from "react-native-paper";
import { SettingsChangePassword } from "./SettingsChangePassword";
import { SettingsAboutApplication } from "./SettingsAboutApplication";

export function Settings() {
    return (
        <View>
            <List.AccordionGroup>
                <List.Accordion title='Change Password' id='1'>
                    <SettingsChangePassword/>
                </List.Accordion>
                <List.Accordion title='About Application' id='2'>
                    <SettingsAboutApplication/>
                </List.Accordion>
            </List.AccordionGroup>
        </View>
    )
}