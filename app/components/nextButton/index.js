import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const NextButton = ({ onPress, title }) => {
    return (
        <View >
            <TouchableOpacity style={styles.nextBtn} onPress={onPress}>
                <Text style={styles.btnText}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default NextButton