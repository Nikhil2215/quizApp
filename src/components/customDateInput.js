import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Controller} from 'react-hook-form';
import FONTS from '../assets/fonts/index';
import COLOR from '../assets/color';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomDateInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  label,
}) => {
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
  };

  useEffect(() => {
    setLastdate(getDate(date));
  }, [date]);

  const getDate = date => {
    let tempDate = date.toString().split(' ');

    return date !== '' ? `${tempDate[2]} ${tempDate[1]} ${tempDate[3]}` : '';
  };
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <Text style={styles.heading}>{label}</Text>
          <View
            style={[
              styles.container,
              {borderColor: error ? 'red' : COLOR.PRIMARY},
            ]}>
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
          {error && (
            <Text
              style={{
                color: 'red',
                alignSelf: 'stretch',
                fontFamily: FONTS.NunitoRegular,
              }}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.WHITE,
    width: '100%',
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 5,
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
  heading: {
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

export default CustomDateInput;
