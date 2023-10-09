import React from 'react'
import { View} from 'react-native'
import { Button, List } from "react-native-paper";
import { useDispatch } from 'react-redux';
import { useNavigation } from "@react-navigation/native";
import {
    GoogleSignin,
  } from '@react-native-google-signin/google-signin';
import { SettingsChangePassword } from "./SettingsChangePassword";
import { SettingsAboutApplication } from "./SettingsAboutApplication";
import { saveLoggedin } from '../../store/generalReducer';
import { screen } from "../../constant/screenName";

export function Settings() {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleLogout = async () => {
        try {
            await GoogleSignin.signOut();
            dispatch(saveLoggedin(false));
            navigation.navigate(screen.account.login);
          } catch (error) {
            console.error(error);
          }
    }
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
            <Button
                title="Logout"
                onPress={handleLogout} 
            >Logout</Button>
        </View>
    )
}