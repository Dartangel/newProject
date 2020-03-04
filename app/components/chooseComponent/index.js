import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export const ChoosePlan = (title, subTitle) => {
    return (
        <View style={styles.regButton}>
            <TouchableOpacity>
                <Text style={styles.header1}>{title}</Text>
                <Text style={styles.header2}>{subTitle}</Text>
            </TouchableOpacity>
        </View>
    )
}