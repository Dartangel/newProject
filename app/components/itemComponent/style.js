import {StyleSheet} from 'react-native';
import { colors } from '../../services/constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    borderRadius: 3,
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginBottom: 5,
  },
  headerTitle: {
    flex: 0.75,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 20,
    color: colors.black,
  },
  headerCount: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    borderWidth: 4,
    borderColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    fontSize: 15,
    color: colors.black,
  },
});

export default styles;
