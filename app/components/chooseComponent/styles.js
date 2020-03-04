import { StyleSheet } from 'react-native'
import { colors } from '../../services/constants'

const styles = StyleSheet.create({

    header1: {
        fontSize: 20,
        color: colors.white
    },
    header2: {
        paddingLeft: 15,
        color: colors.white
    },

    regButton: {
        alignItems: 'center',
        paddingVertical: 20,
        alignItems: 'center',
        height: '17%',
        backgroundColor: colors.rgba,
        borderRadius: 25,
        marginBottom: 20,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignContent: 'center',
    },
})

export default styles