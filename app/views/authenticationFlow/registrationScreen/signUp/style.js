import { colors } from "../../../../services/constants";
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 60,
        paddingRight: 60,
        alignSelf: 'stretch'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    TextInput: {
        backgroundColor: colors.rgba,
        borderRadius: 25,
        marginBottom: 30,
        fontSize: 20,
        color: colors.green,
        alignSelf: 'stretch',
        height: 60,
        borderBottomColor: colors.white,
        borderBottomWidth: 1,
    },
    text:
    {
        alignSelf: 'center',
        fontSize: 35,
        paddingBottom: 10,
        color: colors.white
    },
})