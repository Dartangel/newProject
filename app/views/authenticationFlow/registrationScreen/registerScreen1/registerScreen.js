import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { images } from '../../../../services/utils';
import { ROUTERS, titles } from '../../../../services/constants';

export default function RegistrationScreen1({ navigation }) {

    const registerScreens = (title, subTitle) => {
        return (
            <View style={styles.regButton}>
                <TouchableOpacity>
                    <Text style={styles.header1}>{title}</Text>
                    <Text style={styles.header2}>{subTitle}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const goToNextActivity = () => {
        navigation.navigate(ROUTERS.RegisterScreen2);
    };

    return (
        <ImageBackground style={styles.image} source={images.logerImage2}>
            <View style={styles.logo}>
                <Text style={styles.header1}>{titles.CHOOSE_PLAN}</Text>
                <Text style={styles.header2}>{titles.TRAINING_PLAN}</Text>
            </View>
            <View style={styles.set}>
                {registerScreens(titles.TITLE1, titles.OPTIONS1)}
                {registerScreens(titles.TITLE2, titles.OPTIONS2)}
                {registerScreens(titles.TITLE3, titles.OPTIONS3)}
                <TouchableOpacity style={styles.nextBtn} onPress={() => goToNextActivity()}>
                    <Text style={styles.btnText}>{titles.NEXT_BUTTON}</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};