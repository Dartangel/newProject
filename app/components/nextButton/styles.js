import { StyleSheet } from 'react-native'
import { colors } from '../../services/constants'


const styles = StyleSheet.create({
    nextBtn: {
        backgroundColor: colors.green,
        minHeight: 60,
        borderRadius: 50,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    btnText: {
        fontSize: 20,
        color: colors.black
    },
})

export default styles