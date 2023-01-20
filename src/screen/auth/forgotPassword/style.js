import {StyleSheet} from 'react-native';
import GLOBALS from '../../../assets';
const {FONTS, COLOR} = GLOBALS;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginView: {
    flex: 0.5,
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
    height: 300,
    width: '80%',
    maxWidth: 500,
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
    flex: 0.2,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 40,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  button: {
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
  imageView: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    color: COLOR.WHITE,
    fontFamily: FONTS.NunitoRegular,
    fontSize: 15,
    marginBottom: 10,
  },
  forgotView: {
    marginTop: 10,
    flexDirection: 'row',
    //backgroundColor: 'red',
    justifyContent: 'flex-end',
  },
  forgotText: {
    fontFamily: FONTS.NunitoRegular,
    fontSize: 15,
    color: COLOR.PRIMARY,
  },
});
export default styles;
