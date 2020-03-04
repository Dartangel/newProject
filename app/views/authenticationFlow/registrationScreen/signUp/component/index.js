import React from 'react';
import { View, TextInput } from 'react-native';
import styles from '../style';

export const TextInputs = (placeholder, setValue, check) => {
    return (
        <View>
            <TextInput style={styles.TextInput} placeholder={placeholder} placeholderTextColor="white"
                onChangeText={(val) => setValue(val)}
                secureTextEntry={check} />
        </View>
    )
}