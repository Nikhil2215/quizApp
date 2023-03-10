import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import GLOBALS from '../../../assets';
const {IMAGE} = GLOBALS;
import styles from './style';
import {getQuizzes} from '../../../util/dataBase';
import moment from 'moment';

const HomeScreen = ({navigation}) => {
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
    <ImageBackground source={IMAGE.backImage} style={styles.container}>
      {/* Quiz list */}
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
                    <Text style={styles.messText}>
                      This quiz expired on {quiz.date}
                    </Text>
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
                </View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    navigation.navigate('PlayQuiz', {
                      quizId: quiz.id,
                    });
                  }}>
                  <Text style={styles.buttonText}>Play</Text>
                </TouchableOpacity>
              </View>
            );
          }
        }}
      />
    </ImageBackground>
  );
};

export default HomeScreen;
