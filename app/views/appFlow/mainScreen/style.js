import { StyleSheet } from 'react-native';
import { colors } from '../../../services/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackground,
  },
  headerRows: {
    flex: 0.1,
    flexDirection: 'row',
  },
  headerMainTile: {
    flex: 0.6,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    color: colors.white,
    paddingLeft: 20,
    fontWeight: 'bold',
  },
  headerIconOne: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerIconTwo: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderView: {
    flex: 0.35,
  },
  subHeaderRows: {
    flex: 0.05,
    flexDirection: 'row',
    marginBottom: 10,
  },
  subHeaderIcon: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subHeaderTextView: {
    flex: 0.7,
    justifyContent: 'center',
  },
  subHeaderTitle: {
    fontSize: 15,
    color: colors.white,
  },
  subHeaderCountView: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subHeaderCount: {
    fontSize: 15,
    color: colors.white,
  },

  itemsViewRows: {
    flex: 0.5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default styles;
