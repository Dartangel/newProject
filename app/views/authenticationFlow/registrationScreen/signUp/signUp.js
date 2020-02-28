import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, ImageBackground, AsyncStorage } from 'react-native';
import style from './style';
import { images } from '../../../../services/utils';
import { titles, ROUTERS } from '../../../../services/constants';

export default function SignUp({ navigation }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const showData = async () => {
        let loginDetails = await AsyncStorage.getItem('loginDetails');
        let ld = JSON.parse(loginDetails);
        if (username && password) {
            if (ld.username == username && ld.password == password) {
                {
                    navigation.navigate(ROUTERS.MainScreen);
                };
            }
            else {
                alert(titles.PASSWORD_ERROR); sdfsd
            }
        }
        else {
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
                    <Text style={styles.text}>{titles.AUTHORIZATION}</Text>
                    {textInputs(titles.USERNAME, setUsername, false)}
                    {textInputs(titles.PASSWORD, setPassword, true)}
                    <TouchableOpacity style={styles.button}
                        onPress={() => showData()}>
                        <Text style={styles.btnText}>{titles.LOGIN}</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </ImageBackground>
    );
};