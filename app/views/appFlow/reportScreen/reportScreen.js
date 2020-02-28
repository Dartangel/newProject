import React from 'react';
import styles from './style'
import { View, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const settings = (title, value) => {
    return (
        <View style={styles.itemsRow}>
            <View style={styles.titleView}>
                <View style={styles.iconView}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.timeText}>
                    <Text style={styles.timeText}>{value}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const report = (value1, value2, value3, title1, title2, title3) => {
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
                <View style={styles.repView} >
                    <Text style={styles.repText}>{title1}</Text>
                    <Text style={styles.repText}>{title2}</Text>
                    <Text style={styles.repText}>{title3}</Text>
                </View>
            </View>
        </View>
    )
}

const items = (title, value, middle) => {
    return (
        <View style={styles.itemsRow}>
            <View style={styles.titleView}>
                <View style={styles.iconView}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </View>
            <View style={styles.time}>
                <Text style={styles.timeText}>{middle}</Text>
            </View>
        </View>
    )
}

const ReportScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.mainHeaderText}>Отчёт</Text>
            </View>
            <ScrollView >
                <View style={styles.warmupContainer}>
                    <View style={styles.warmupHeader}>
                        <Text style={styles.headerText}>Всего</Text>
                    </View>
                    {report('5', '5.6', '00:57', 'Тренировки', 'Ккалории', 'Длительность')}
                </View>
                <View style={styles.warmupContainer}>
                    <View style={styles.warmupHeader}>
                        <Text style={styles.headerText}>История</Text>
                    </View>
                </View>
                <View style={styles.warmupContainer}>
                    <View style={styles.warmupHeader}>
                        <Text style={styles.headerText}>Вес</Text>
                    </View>
                </View>
                <View style={styles.warmupContainer}>
                    {items('Текущий           ', null, '64.00 кг')}
                    {items('Самый тяжёлый', null, '64.00 кг')}
                    {items('Самый лёгкий', null, '64.00 кг')}
                </View>
                <View style={styles.warmupContainer}>
                    {settings('ИМТ(кг/м²)', 'Редактировать')}
                    {settings('Рост', 'Редактировать')}
                    {settings('Текущий', '181.0 см')}
                </View>
            </ScrollView>
        </View>
    );
}

export default ReportScreen;