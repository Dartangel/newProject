import React from 'react';
import styles from '../../style'
import { View, Text } from 'react-native';

const Report = (value1, value2, value3, title1, title2, title3) => {
    return (
        <View style={styles.container}>
            <View style={styles.repContainer}>
                <View style={styles.repView}>
                    <Text style={styles.repValue}>{value1}</Text>
                    <Text style={styles.repValue}>{value2}</Text>
                    <Text style={styles.repValue}>{value3}</Text>
                </View>
            </View>
            <View style={styles.repContainer}>
                <View style={styles.repView}>
                    <Text style={styles.repText}>{title1}</Text>
                    <Text style={styles.repText}>{title2}</Text>
                    <Text style={styles.repText}>{title3}</Text>
                </View>
            </View>
        </View>
    )
}
export default Report