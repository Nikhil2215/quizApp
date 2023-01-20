import {StyleSheet} from 'react-native';
import GLOBALS from '../../../assets';
const {FONTS, COLOR} = GLOBALS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginView: {
    flex: 0,
    justifyContent: 'center',
    backgroundColor: COLOR.WHITE,
    marginHorizontal: 15,
    elevation: 10,
    marginVertical: 10,
    padding: 15,
    borderRadius: 20,
  },
  logo: {
    marginTop: 10,
    height: 100,
    width: '40%',
    maxWidth: 500,
    marginLeft: 25,
  },
  heading: {
    fontFamily: FONTS.NunitoBold,
    fontSize: 40,
  },
  subHeading: {
    fontFamily: FONTS.NunitoRegular,
    fontSize: 15,
  },
  buttonView: {
    flex: 0.5,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 40,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: COLOR.WHITE,
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 50,
  },
  buttontext: {
    fontWeight: '900',
    color: COLOR.PRIMARY,
    fontFamily: FONTS.NunitoBold,
    fontSize: 20,
  },
  Imageview: {
    flex: 1,
  },

  link: {
    color: COLOR.WHITE,
    fontFamily: FONTS.NunitoRegular,
    fontSize: 15,
    marginBottom: 20,
  },
});
export default styles;
