import React, { useState } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, ImageBackground, AsyncStorage } from 'react-native';
import style from './style';
import { images } from '../../../../services/utils';
import { titles, ROUTERS } from '../../../../services/constants';
import NextButton from '../../../../components/nextButton';
import styles from './style';
import { TextInputs } from './component';

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

    return (
        <ImageBackground style={styles.image} source={images.logerImage2}>
            <View style={style.container}>
                <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset="-250" enabled style={styles.wrapper}>
                    <Text style={styles.text}>{titles.AUTHORIZATION}</Text>
                    {TextInputs(titles.USERNAME, setUsername, false)}
                    {TextInputs(titles.PASSWORD, setPassword, true)}
                    <NextButton onPress={showData} title={titles.ENTER} />
                </KeyboardAvoidingView>
            </View>
        </ImageBackground>
    );
};