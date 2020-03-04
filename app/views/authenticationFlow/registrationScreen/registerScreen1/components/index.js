import React from 'react';
import { View } from 'react-native';
import styles from '../styles';
import { titles } from '../../../../../services/constants';
import NextButton from '../../../../../components/nextButton';
import { ChoosePlan } from '../../../../../components/chooseComponent';

export const PlanSettings = (nextScreen, { navigation }) => {

    const goToNextActivity = () => {
        navigation.navigate(nextScreen);
    };
    return (
        <View style={styles.set}>
            {ChoosePlan(titles.TITLE1, titles.OPTIONS1)}
            {ChoosePlan(titles.TITLE2, titles.OPTIONS2)}
            {ChoosePlan(titles.TITLE3, titles.OPTIONS3)}
            <View style={styles.nextButton}>
                <NextButton onPress={goToNextActivity} title={titles.NEXT_BUTTON} />
            </View>
        </View>
    )
}