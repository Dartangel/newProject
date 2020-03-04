import { StyleSheet } from 'react-native'
import { colors } from '../../../../services/constants/index'

const styles = StyleSheet.create({

    nextButton: {
        alignItems: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginVertical: 40,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    btnText: {
        fontSize: 35,
        color: colors.green
    },
    header2: {
        paddingLeft: 15,
        fontSize: 15,
        color: colors.white
    },
})

export default styles