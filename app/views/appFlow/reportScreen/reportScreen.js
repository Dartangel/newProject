import React from 'react';
import styles from './style'
import { View, Text, ScrollView } from 'react-native';
import Settings from './components/settings/settings';
import Report from './components/report/report';
import Items from './components/items/items';
import Headers from './components/headers/headers';
import { titles } from '../../../services/constants';

const ReportScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.mainHeaderText}>{titles.REPORT}</Text>
            </View>
            <ScrollView >
                <View style={styles.warmupContainer}>
                    <Headers header={titles.REPORT_HEADER_1} />
                    {Report('5', '5.6', '00:57', titles.TRENING, titles.CALORIES, titles.DURATION)}
                </View>
                <View style={styles.warmupContainer}>
                    <Headers header={titles.REPORT_HEADER_2} />
                </View>
                <View style={styles.warmupContainer}>
                    <Headers header={titles.REPORT_HEADER_3} />
                </View>
                <View style={styles.warmupContainer}>
                    <Items title={titles.CURRENT} value={'64.00 кг'} />
                    <Items title={titles.THE_HEAVIEST} value={'64.00 кг'} />
                    <Items title={titles.THE_EASIEST} value={'64.00 кг'} />
                </View>
                <View style={styles.warmupContainer}>
                    <Settings title={titles.BMI} button={titles.EDIT} />
                    <Settings title={titles.HEIGHT} button={titles.EDIT} />
                    <Settings title={titles.CURRENT} button={'181.0 см'} />
                </View>
            </ScrollView>
        </View>
    );
}

export default ReportScreen;