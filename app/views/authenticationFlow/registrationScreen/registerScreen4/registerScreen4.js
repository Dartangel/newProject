import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';
import { images } from '../../../../services/utils';
import { ROUTERS, titles } from '../../../../services/constants';

export default function RegisterScreen4 ({ navigation }) {

    const registerScreens = (title) => {
        return (
            <View style={styles.regButton}>
                <TouchableOpacity>
                    <Text style={styles.header1}>{title}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const goToNextActivity = () => {
        navigation.navigate(ROUTERS.MainScreen);
    };

    return (
        <ImageBackground style={styles.image} source={images.logerImage2}>
            <View style={styles.logo}>
                <Text style={styles.header1}>{titles.CHOOSE_PLAN1}</Text>
                <Text style={styles.header2}>{titles.TRAINING_PLAN1}</Text>
            </View>
            <View style={styles.set}>
                {registerScreens(titles.TITLE4)}
                {registerScreens(titles.TITLE5)}
                {registerScreens(titles.TITLE6)}
                <TouchableOpacity style={styles.nextBtn} onPress={() => goToNextActivity()}>
                    <Text style={styles.btnText}>{titles.NEXT_BUTTON}</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};