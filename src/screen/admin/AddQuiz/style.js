import {StyleSheet} from 'react-native';
import GLOBALS from '../../../assets';
const {FONTS, COLOR} = GLOBALS;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    marginTop: 10,
    fontSize: 40,
    fontFamily: FONTS.NunitoBold,
    marginHorizontal: 20,
  },
  form: {
    backgroundColor: COLOR.WHITE,
    elevation: 10,
    padding: 15,
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  buttonView: {
    marginTop: 20,
  },
  container1: {
    backgroundColor: COLOR.WHITE,
    width: '100%',
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: COLOR.PRIMARY,
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    flex: 1,
    fontSize: 18,
    fontFamily: FONTS.NunitoRegular,
  },
  heading1: {
    marginTop: 10,
    fontFamily: FONTS.NunitoBold,
    fontSize: 18,
  },
  passwordIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarView: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
  },
  textStyle: {
    fontSize: 18,
    fontFamily: FONTS.NunitoRegular,
    color: COLOR.BLACK,
  },
});
export default styles;
