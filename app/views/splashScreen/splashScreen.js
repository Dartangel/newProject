import React, { useEffect } from 'react';
import { View, ImageBackground } from 'react-native';
import styles from './styles';
import { images } from '../../services/utils/index';
import Loader from '../../components/loader/index';

export default function SplashScreen({ navigation }) {

    useEffect(() => {
        setTimeout(() => navigation.navigate('Auth'), 2000)
    }, [])

    return (
        <View>
            <ImageBackground style={styles.imagebgr} source={images.logerImage2}>
                <Loader source={images.logerImage}
                    style={styles.imagebgr}
                />
            </ImageBackground>
        </View>
    );
}