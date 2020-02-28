import { StyleSheet } from 'react-native';
import { colors } from '../../../services/constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.mainBackground
    },
    header: {
        width: '100%',
        height: 50,
        borderBottomColor: colors.grey,
        borderBottomWidth: 3,
    },
    mainHeaderText: {
        fontSize: 25,
        paddingTop: 5,
        paddingStart: 10,
        color: colors.white
    },
    warmupContainer: {
        width: '100%',
        height: 200,
        borderBottomWidth: 5,
        borderBottomColor: colors.grey
    },
    warmupHeader: {
        flex: 0.5,
        justifyContent: 'center',
        paddingLeft: 15
    },
    headerText: {
        fontSize: 20,
        color: colors.white,
    },
    itemsRow: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: colors.grey
    },
    titleView: {
        flex: 1,
        flexDirection: 'row',
       padding:5
    },
    timeText: {
        fontSize: 15,
        color: colors.green,
    },
    time: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    iconView: {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
    },
   
    text: {
        fontSize: 20,
        color: colors.white,
    },
    buttonView: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    repValue: {
        fontSize: 20,
        color: colors.green,
    },
    repContainer: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    repText: {
        fontSize: 15,
        color: colors.grey,
    },
    repView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});
export default styles