import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const Header = ({ header, subHeader }) => {
    return (
        <View style={styles.logo}>
            <Text style={styles.header1}>{header}</Text>
            <Text style={styles.header2}>{subHeader}</Text>
        </View>
    )
}
export default Header