import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {View, Image} from 'react-native';
import GLOBALS from '../../assets';
const {FONTS, COLOR, IMAGE} = GLOBALS;

const CustomDraw = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 0.2,
          backgroundColor: COLOR.PRIMARY,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={IMAGE.logo3}
          style={{
            resizeMode: 'contain',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80%',
            width: '70%',
          }}
        />
      </View>
      <DrawerContentScrollView>
        <DrawerItem
          activeTintBackgroundColor={COLOR.PRIMARY}
          label="Profile"
          labelStyle={{fontSize: 20, fontFamily: FONTS.NunitoRegular}}
          onPress={() => navigation.navigate('Profile')}
        />

        <DrawerItem
          label="Logout"
          onPress={() => {
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
            });
          }}
          labelStyle={{fontSize: 20, fontFamily: FONTS.NunitoRegular}}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDraw;
