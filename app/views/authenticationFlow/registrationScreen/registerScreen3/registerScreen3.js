import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';
import { images } from '../../../../services/utils';
import { Picker } from 'react-native-wheel-pick';
import { ROUTERS, titles } from '../../../../services/constants';
import NextButton from '../../../../components/nextButton';
import Header from '../../../../components/header';

export default function RegisterScreen3({ navigation }) {

    const itemList = (['Более 120c', '0-30c', '30-60c', '60-120c']);
    const [selectedItem, setItem] = useState('0-30')

    const goToNextActivity = () => {
        navigation.navigate(ROUTERS.RegisterScreen4);
    };

    return (
        <ImageBackground style={styles.image} source={images.logerImage2}>
            <Header title1={titles.REGISTER_HEADER1} title2={titles.REGISTER_HEADER2} />
            <View style={styles.set}>
                <Picker
                    style={styles.pickerStyle}
                    selectedValue={selectedItem}
                    pickerData={itemList}
                    onValueChange={setItem}
                    itemSpace={50}>
                </Picker>
                <NextButton onPress={goToNextActivity} title={titles.NEXT_BUTTON} />
            </View>
        </ImageBackground >
    );
};