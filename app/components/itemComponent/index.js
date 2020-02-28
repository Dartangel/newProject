import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

const ItemComponent = ({text, count}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerTitle}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.headerCount}>
        <View style={styles.circle}>
          <Text style={styles.count}>{count}</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemComponent;
