
import React from 'react';
import styles from '../../style'
import { View, Text } from 'react-native';

const Items = ({ title, value }) => {
    return (
        <View style={styles.itemsRow}>
            <View style={styles.titleView}>
                <View style={styles.iconView}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </View>
            <View style={styles.time}>
                <Text style={styles.timeText}>{value}</Text>
            </View>
        </View>
    )
}
export default Items