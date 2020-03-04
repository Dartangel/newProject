import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const FirstButtons = ({ onPress, title }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => onPress()}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}
export default FirstButtons