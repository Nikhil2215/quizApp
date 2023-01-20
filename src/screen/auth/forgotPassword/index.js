import {
  Text,
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  ImageBackground,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import IMAGE from '../../../assets/image/image';
import {useForm, Controller} from 'react-hook-form';
import CustomInput from '../../../components/customInput';
import CustomButton from '../../../components/customButton';
import styles from './style';
import {CommonActions} from '@react-navigation/native';
import CustomPassword from '../../../components/customPassword';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {FirebaseResetPassword} from '../../../util/auth';

const ForgotPassword = ({navigation}) => {
  const {height} = useWindowDimensions();
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onPressReset = data => {
    FirebaseResetPassword(data.email, navigation);
  };

  return (
    <ImageBackground source={IMAGE.backImage} style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={{flexGrow: 1}}
        bounces={false}>
        <View style={styles.imageView}>
          <Image
            source={IMAGE.logo2}
            style={[styles.logo, {height: height * 0.3}]}
            resizeMode="contain"
          />
        </View>
        <View style={styles.loginView}>
          <Text style={styles.heading}>Reset password</Text>
          <Text style={styles.subHeading}>
            Enter your details to reset your password
          </Text>
          <CustomInput
            label={'Email'}
            name="email"
            control={control}
            placeholder="Enter email"
            rules={{
              required: 'Email is required',
              pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
            }}
          />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            onPress={handleSubmit(onPressReset)}
            style={styles.button}>
            <Text style={styles.buttontext}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop: 5}}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Go to login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default ForgotPassword;
