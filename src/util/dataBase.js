import firestore from '@react-native-firebase/firestore';
import {ToastAndroid} from 'react-native';

export const createQuiz = (currentQuizId, title, description, time, date) => {
  return firestore().collection('Quizzes').doc(currentQuizId).set({
    title: title,
    description: description,
    time: time,
    date: date,
  });
};

export const createQuestion = (currentQuizId, currentQuestionId, question) => {
  return firestore()
    .collection('Quizzes')
    .doc(currentQuizId)
    .collection('QNA')
    .doc(currentQuestionId)
    .set(question);
};

export const getQuizzes = () => {
  return firestore().collection('Quizzes').get();
};

export const getQuizById = currentQuizId => {
  return firestore().collection('Quizzes').doc(currentQuizId).get();
};

export const getQuestionByQuizId = currentQuizId => {
  return firestore()
    .collection('Quizzes')
    .doc(currentQuizId)
    .collection('QNA')
    .get();
};
