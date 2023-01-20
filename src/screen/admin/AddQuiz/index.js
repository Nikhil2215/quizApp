import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import IMAGE from '../../../assets/image/image';
import CustomButton from '../../../components/customButton';
import CustomInput from '../../../components/customInput';
import {useForm, Controller} from 'react-hook-form';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from 'react-native-modal-datetime-picker';

import styles from './style';
import {createQuiz} from '../../../util/dataBase';

const AddQuiz = ({navigation}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();
  const [lastdate, setLastdate] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setLastdate(getDate(date));
    hideDatePicker();
    console.log(lastdate);
  };

  useEffect(() => {
    setLastdate(getDate(date));
  }, [date]);

  const getDate = date => {
    let tempDate = date.toString().split(' ');

    return date !== '' ? `${tempDate[2]} ${tempDate[1]} ${tempDate[3]}` : '';
  };

  const saveQuiz = async (data, e) => {
    const currentQuizId = Math.floor(100000 + Math.random() * 9000).toString();
    // Save to firestore
    await createQuiz(
      currentQuizId,
      data.title,
      data.description,
      data.time,
      lastdate,
    );
    console.log(data, lastdate);

    //navigate to add Question
    navigation.navigate('AddQuestion', {
      currentQuizId: currentQuizId,
    });

    // reset value
    reset({});
    ToastAndroid.show('Quiz saved', ToastAndroid.BOTTOM);
  };
  return (
    <ImageBackground source={IMAGE.backImage} style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
        <Text style={styles.heading}>Create quiz</Text>
        <View style={styles.form}>
          <CustomInput
            label={'Title'}
            name="title"
            control={control}
            placeholder="Enter quiz title"
            rules={{
              required: 'Title is required',
            }}
          />
          <CustomInput
            label={'Description'}
            name="description"
            control={control}
            placeholder="Enter quiz description"
            rules={{
              required: 'Description is required',
            }}
          />

          <Text style={styles.heading1}>Last Date</Text>
          <View style={styles.container1}>
            <Text style={styles.textStyle}>{lastdate}</Text>
            <TouchableOpacity
              style={styles.calendarView}
              onPress={showDatePicker}>
              <Icon
                name="calendar-outline"
                size={30}
                color={'grey'}
                style={styles.passwordIcon}
              />

              <DateTimePicker
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                display={'inline'}
              />
            </TouchableOpacity>
          </View>

          <CustomInput
            label={'Time Limit'}
            name="time"
            control={control}
            placeholder="Enter time in minute"
            keyboardType="numeric"
          />

          <View style={styles.buttonView}>
            <CustomButton text={'Save Quiz'} onPress={handleSubmit(saveQuiz)} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default AddQuiz;
