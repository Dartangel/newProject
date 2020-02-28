import React from 'react';
import styles from './styles';
import { TouchableOpacity, View, ImageBackground, Text } from 'react-native';
import { images } from '../../../../services/utils/index';
import { ROUTERS, titles } from '../../../../services/constants';

const RegistrationScreen = ({ navigation }) => {

    const goToAuthorizationScreen = () => {
        navigation.navigate(ROUTERS.SignUp);
    };

    const _signInAsync = async () => {
        navigation.navigate(ROUTERS.RegisterScreen);
    };

    return (
        <ImageBackground style={styles.image} source={images.logerImage2}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => goToAuthorizationScreen()}>
                    <Text style={styles.btnText}>{titles.ENTER}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => _signInAsync()}>
                    <Text style={styles.btnText}>{titles.REGISTRATION}</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};
export default RegistrationScreen;