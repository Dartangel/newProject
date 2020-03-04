import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, ImageBackground, AsyncStorage } from 'react-native';
import style from './styles';
import { images } from '../../../../services/utils';
import styles from './styles';
import { ROUTERS, titles } from '../../../../services/constants';
import NextButton from '../../../../components/nextButton';
import TextInputs from './components'

export default function RegisterScree({ navigation }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const saveData = async () => {
        let loginDetails = {
            username: username,
            password: password,
            confirm: confirm
        }
        if (username && password && confirm) {
            if (password === confirm) {
                await AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails))
                { navigation.navigate(ROUTERS.RegisterScreen1) }
            } else {
                alert(titles.PASSWORD_DO_NOT_MATCH)
            }
        } else {
            alert(titles.REGISTER_ALERT)
        }
    }

    return (
        <ImageBackground style={styles.image} source={images.logerImage2}>
            <View style={style.container}>
                <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset="-250" enabled style={styles.wrapper}>
                    <Text style={styles.text}>{titles.REGISTRATION}</Text>
                    {TextInputs(titles.USERNAME, setUsername, false)}
                    {TextInputs(titles.PASSWORD, setPassword, true)}
                    {TextInputs(titles.CONFIRM_PASSWORD, setConfirm, true)}
                    <View style={styles.nextButton}>
                        <NextButton onPress={saveData} title={titles.NEXT_BUTTON} />
                    </View>
                </KeyboardAvoidingView>
            </View>
        </ImageBackground>
    );
};