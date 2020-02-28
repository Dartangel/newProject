import React from 'react';
import styles from './style';
import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../../services/constants';

const items = (title, time, iconName,secondIcon) => {
    return (
        <View style={styles.itemsRow}>
            <View style={styles.titleView}>
                <View style={styles.iconView}>
                    <Icon name={iconName} color={colors.grey} size={30} />
                </View>
                <View style={styles.textView}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </View>
            <View style={styles.time}>
                <Text style={styles.timeText}>{time}</Text>
                <Icon name={secondIcon} color={colors.green} size={20} />
            </View>
        </View>
    )
}
const ProfileScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.mainHeaderText}>Я</Text>
            </View>
            <ScrollView style={{ flex: 0.9 }}>
                <View style={styles.warmupContainer}>
                    <View style={styles.warmupHeader}>
                        <Text style={styles.headerText}>Разминка</Text>
                    </View>
                    {items('Напоминание', '21:00', 'md-alarm','md-add')}
                    {items('Обратный отсчёт', '10 сек', 'ios-sync','md-arrow-dropdown')}
                    {items('Отдых при тренировке', '10 сек', 'md-cafe','md-arrow-dropdown')}
                    {items('Настройки звука', null, 'md-volume-high',null)}
                </View>
                <View style={styles.warmupContainer}>
                    <View style={styles.warmupHeader}>
                        <Text style={styles.headerText}>Общие настройки</Text>
                    </View>
                    {items('Синхронизация с приложением Google', null, 'ios-heart','ios-cog')}
                    {items('Данные о здоровье', null, 'ios-medkit',null)}
                    {items('Метрические единици измерения', null, 'ios-appstore',null)}
                    {items('Выбор Языка', null, 'ios-globe',null)}
                    {items('Сбросить результаты', null, 'ios-refresh',null)}
                </View>
                <View style={styles.warmupContainer}>
                    <View style={styles.warmupHeader}>
                        <Text style={styles.headerText}>Голосовые Опции</Text>
                    </View>
                    {items('Тест речи', null, 'ios-heart',null)}
                    {items('Выбрать синтезатор речи TTS', null, 'md-settings',null)}
                    {items('Скачать синтезатор речи TTS', null, 'md-download',null)}
                    {items('Голос язык', null, 'ios-mic',null)}
                    {items('Скачать больше синтезаторов реч', null, 'ios-code-download',null)}
                    {items('TTS Настройки устройства', null, 'ios-options',null)}
                </View>      
                <View style={styles.warmupContainer}>
                    <View style={styles.warmupHeader}>
                        <Text style={styles.headerText}>Поддержите нас</Text>
                    </View>
                    {items('Поделиться с друзьями', null, 'md-share',null)}
                    {items('Оцените нас', null, 'md-checkbox',null)}
                    {items('Отзыв', null, 'ios-paper-plane',null)}
                    {items('Политика конфиденциальности', null, 'ios-eye',null)}
                </View>                        
            </ScrollView>
        </View>
    );

}
export default ProfileScreen;