import React from 'react';
import { View } from 'react-native';
import styles from '../styles';
import { titles } from '../../../../../services/constants';
import NextButton from '../../../../../components/nextButton';
import { ChoosePlan } from '../../../../../components/chooseComponent';

const PlanSettings = (nextScreen, { navigation }) => {

    const goToNextActivity = () => {
        navigation.navigate(nextScreen);
    };
    return (
        <View style={styles.set}>
            {ChoosePlan(titles.TITLE4)}
            {ChoosePlan(titles.TITLE5)}
            {ChoosePlan(titles.TITLE6)}
            <View style={styles.nextButton}>
                <NextButton onPress={goToNextActivity} title={titles.NEXT_BUTTON} />
            </View>
        </View>
    )
}
export default PlanSettings