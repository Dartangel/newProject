import { StyleSheet } from 'react-native'
import { colors } from '../../../../services/constants/index'


const styles = StyleSheet.create({

    nextButton: {
        alignItems: 'center'
    },
    pickerStyle: {
        paddingTop: 20,
        alignContent: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: '65%',

    },
    nextBtn: {
        height: '15%',
        width: '50%',
        backgroundColor: colors.green,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },

    image: {
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    header1: {
        textAlign: 'center',
        alignContent: 'center',
        fontSize: 25,
        color: colors.white
    },
    btnText: {
        fontSize: 20,
        color: colors.black
    },
    header2: {
        textAlign: 'center',
        fontSize: 15,
        color: colors.white
    },

    logo: {
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    set: {
        alignItems: 'center',
        flex: 1,
    },
})

export default styles