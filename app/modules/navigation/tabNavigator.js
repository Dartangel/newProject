import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import ReportScreen from '../../views/appFlow/reportScreen/reportScreen';
import MainScreen from '../../views/appFlow/mainScreen/mainScreen';
import ProfileScreen from '../../views/appFlow/profileScreen/profile'
import SwitchNavigator from './settingSwitchNavigator';
import { colors, titles } from '../../services/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

const TabBarNavigator = createBottomTabNavigator({

    MainScreen: {
        screen: MainScreen,
        navigationOptions: {
            tabBarLabel: titles.PLAN,
            tabBarIcon: ({ tintColor }) => (
                <Icon name="md-today" color={tintColor} size={22} />
            ),
        },
    },

    ReportScreen: {
        screen: ReportScreen,
        navigationOptions: {
            tabBarLabel: titles.REPORT,
            tabBarIcon: ({ tintColor }) => (
                <Feather name="bar-chart-2" color={tintColor} size={25} />
            ),
        },
    },

    ProfileScreen: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarLabel: titles.I_AM,
            tabBarIcon: ({ tintColor }) => (
                <Icon1 name="person" color={tintColor} size={40} />
            )

        },
    },

},
    {
        tabBarOptions: {

            activeTintColor: colors.green,
            inactiveTintColor: colors.white,
            showIcon: true,
            style: {
                height: 60,
                backgroundColor: '#0F2635',
            },
            labelStyle: {
                fontSize: 14,
            },
        },
    }
);
export default TabBarNavigator