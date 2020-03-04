import React from 'react';
import styles from '../../style';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../../../../services/constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Items = ({ header, time, icon }) => {
    return (
        <View style={styles.itemsRow}>
            <View style={styles.titleView}>
                <View style={styles.iconView}>
                    <Icon name={icon} color={colors.grey} size={30} />
                </View>
                <View style={styles.textView}>
                    <TouchableOpacity >
                        <Text style={styles.text}>{header}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.time}>
                <Text style={styles.timeText}>{time}</Text>
            </View>
        </View>
    )
}
export default Items