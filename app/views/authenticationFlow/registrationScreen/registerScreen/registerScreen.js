import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, ImageBackground, AsyncStorage } from 'react-native';
import style from './styles';
import { images } from '../../../../services/utils';
import styles from './styles';
import { ROUTERS, titles } from '../../../../services/constants';

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

    const textInputs = (placeholder, setValue, check) => {
        return (
            <View>
                <TextInput style={styles.TextInput} placeholder={placeholder} placeholderTextColor="white"
                    onChangeText={(val) => setValue(val)}
                    secureTextEntry={check} />
            </View>
        )
    }

    return (
        <ImageBackground style={styles.image} source={images.logerImage2}>
            <View style={style.container}>
                <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset="-250" enabled style={styles.wrapper}>
                    <Text style={styles.text}>{titles.REGISTRATION}</Text>
                    {textInputs(titles.USERNAME, setUsername, false)}
                    {textInputs(titles.PASSWORD, setPassword, true)}
                    {textInputs(titles.CONFIRM_PASSWORD, setConfirm, true)}
                    <TouchableOpacity style={styles.button}
                        onPress={() => saveData()}>
                        <Text style={styles.btnText}>{titles.LOGIN}</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </ImageBackground>
    );
};