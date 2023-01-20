import {StyleSheet} from 'react-native';
import GLOBALS from '../../../assets';
const {FONTS, COLOR} = GLOBALS;

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
    width: '70%',
    height: '70%',
  },
  logoView: {
    flex: 0.8,
    justifyContent: 'center',
    alignContent: 'center',
  },

  buttonView: {
    flex: 0.2,
    backgroundColor: COLOR.PRIMARY,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    elevation: 10,
  },
  button: {
    backgroundColor: COLOR.WHITE,
    alignSelf: 'flex-start',
    marginHorizontal: 30,
    borderRadius: 50,
    elevation: 10,
  },
  buttonTitle: {
    fontFamily: FONTS.NunitoBold,
    fontSize: 20,
    padding: 12,
    borderRadius: 10,
    color: COLOR.PRIMARY,
  },
  heading: {
    color: COLOR.WHITE,
    marginHorizontal: 30,
    fontSize: 30,
    fontFamily: FONTS.NunitoBold,
    marginBottom: 10,
  },
});
export default styles;
