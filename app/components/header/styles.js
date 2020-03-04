import { StyleSheet } from 'react-native'
import { colors } from '../../services/constants'


export const styles = StyleSheet.create({

    header1: {
        fontSize: 20,
        color: colors.white
    },

    header2: {
        paddingLeft: 15,
        color: colors.white,
        alignItems: 'center',

    },
    logo: {
        height: '30%',
        flex: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
    },
})