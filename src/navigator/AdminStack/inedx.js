import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Quizhome from '../../screen/admin/quiz';
import AddQuiz from '../../screen/admin/AddQuiz/index';
import GLOBALS from '../../assets';
import Icon from 'react-native-vector-icons/Ionicons';
import AddQuestion from '../../screen/admin/AddQuestion';
const {FONTS, COLOR} = GLOBALS;
const adminStack = createStackNavigator();
const AdminStack = () => {
  return (
    <adminStack.Navigator
      screenOptions={({navigation}) => ({
        headerLeft: () => {
          return (
            <Icon
              name="power"
              size={30}
              color="white"
              style={{marginLeft: 20}}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [
                    {
                      name: 'AuthStack',

                      state: {
                        routes: [
                          {
                            name: 'Login',
                          },
                        ],
                      },
                    },
                  ],
                })
              }
            />
          );
        },

        tabBarShowLabel: false,

        headerTitleAlign: 'center',

        headerTintColor: COLOR.WHITE,

        headerTitleStyle: {
          fontFamily: FONTS.NunitoRegular,
        },

        headerStyle: {
          backgroundColor: COLOR.PRIMARY,

          borderBottomLeftRadius: 30,

          borderBottomRightRadius: 30,

          height: 60,
        },

        tabBarStyle: {
          height: 50,

          borderTopLeftRadius: 20,

          borderTopRightRadius: 20,

          backgroundColor: COLOR.PRIMARY,
        },

        tabBarHideOnKeyboard: true,

        headerTitleStyle: {
          fontSize: 25,

          fontFamily: 'Nunito-Regular',
        },
      })}>
      <adminStack.Screen
        name="Quizhome"
        component={Quizhome}
        options={{title: 'Welcome Admin'}}
      />
      <adminStack.Screen
        name="AddQuiz"
        component={AddQuiz}
        options={{
          title: 'Create quiz',
          headerLeft: () => null,
        }}
      />
      <adminStack.Screen
        name="AddQuestion"
        component={AddQuestion}
        options={{
          title: 'Create quiz',
          headerShown: false,
        }}
      />
    </adminStack.Navigator>
  );
};

export default AdminStack;
