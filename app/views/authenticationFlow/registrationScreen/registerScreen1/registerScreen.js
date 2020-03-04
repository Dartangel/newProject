import React from 'react';
import { ImageBackground } from 'react-native';
import styles from './styles';
import { images } from '../../../../services/utils';
import { ROUTERS, titles } from '../../../../services/constants';
import { PlanSettings } from './components';
import Header from '../../../../components/header';

export default function RegistrationScreen1({ navigation }) {

    return (
        <ImageBackground style={styles.image} source={images.logerImage2}>
            <Header title1={titles.CHOOSE_PLAN} title2={titles.TRAINING_PLAN} />
            {PlanSettings(ROUTERS.RegisterScreen2, { navigation })}
        </ImageBackground>
    );
};