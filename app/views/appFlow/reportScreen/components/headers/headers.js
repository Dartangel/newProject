import React from 'react';
import styles from '../../style'
import { View, Text } from 'react-native';

const Headers = ({ header }) => {

    return (
        <View style={styles.warmupHeader}>
            <Text style={styles.headerText}>{header}</Text>
        </View>
    )
}
export default Headers