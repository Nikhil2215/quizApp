import {ImageBackground, StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';

import CustomButton from '../../components/customButton';
import GLOBALS from '../../assets';
import moment from 'moment';
import {getQuizzes} from '../../util/dataBase';
const {FONTS, COLOR, IMAGE} = GLOBALS;

const Quizhome = ({navigation}) => {
  const [allQuizzes, setAllQuizzes] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getAllQuizzes = async () => {
    setRefreshing(true);
    const quizzes = await getQuizzes();

    // Transform quiz data
    let tempQuizzes = [];
    await quizzes.docs.forEach(async quiz => {
      await tempQuizzes.push({id: quiz.id, ...quiz.data()});
    });
    await setAllQuizzes([...tempQuizzes]);

    setRefreshing(false);
  };

  useEffect(() => {
    getAllQuizzes();
  }, []);
  var currentdate = moment().format('D MMM YYYY').toString();
  return (
    <ImageBackground style={styles.container} source={IMAGE.backImage}>
      <FlatList
        data={allQuizzes}
        onRefresh={getAllQuizzes}
        refreshing={refreshing}
        showsVerticalScrollIndicator={false}
        style={styles.listView}
        renderItem={({item: quiz}) => {
          if (currentdate >= quiz.date) {
            return (
              <View style={styles.quizView1}>
                <View style={styles.textView}>
                  <Text style={styles.title}>{quiz.title}</Text>
                  {quiz.description != '' ? (
                    <Text style={styles.description}>{quiz.description}</Text>
                  ) : null}
                  <View style={styles.messView}>
                    <Text style={styles.btnInactive}>Inactive</Text>
                    <Text>{quiz.date}</Text>
                  </View>
                </View>
              </View>
            );
          } else {
            return (
              <View style={styles.quizView}>
                <View style={styles.textView}>
                  <Text style={styles.title}>{quiz.title}</Text>
                  {quiz.description != '' ? (
                    <Text style={styles.description}>{quiz.description}</Text>
                  ) : null}
                  <View style={styles.messView}>
                    <Text style={styles.btnActive}>Active</Text>
                    <Text>{quiz.date}</Text>
                  </View>
                </View>
              </View>
            );
          }
        }}
      />
      <View style={styles.buttonView}>
        <CustomButton
          text={'Create Quiz'}
          style={styles.button}
          onPress={() => navigation.navigate('AddQuiz')}
        />
      </View>
    </ImageBackground>
  );
};

export default Quizhome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'pink',
    justifyContent: 'flex-end',
    padding: 10,
  },
  button: {
    width: '60%',
  },
  buttonView: {
    flexDirection: 'row-reverse',
  },
  quizView: {
    padding: 20,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.WHITE,
    elevation: 10,
  },
  textView: {
    flex: 1,
    paddingRight: 10,
  },
  title: {
    fontFamily: FONTS.NunitoBold,
    fontSize: 25,
  },
  description: {
    fontFamily: FONTS.NunitoRegular,
    fontSize: 18,
  },
  quizView1: {
    padding: 20,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.WHITE,
    elevation: 10,
  },
  btnInactive: {
    fontFamily: FONTS.NunitoRegular,
    fontSize: 18,
    color: COLOR.RED,
  },
  btnActive: {
    fontFamily: FONTS.NunitoRegular,
    fontSize: 18,
    color: COLOR.GREEN,
  },
  messView: {
    borderColor: COLOR.PRIMARY,
    borderWidth: 2,
    padding: 10,
    marginTop: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
