/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from './types';
import {Image, Text, View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ShortScreen from '../screens/ShortScreen';
import RewardScreen from '../screens/RewardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {RFValue} from 'react-native-responsive-fontsize';
const Tab = createBottomTabNavigator<BottomTabParamList>();

function BottomTab() {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#010101',
          },
          //   sceneStyle: {paddingVertical: 100},
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Image
                    source={
                      focused
                        ? require('../assets/images/home-active.png')
                        : require('../assets/images/home.png')
                    }
                    style={{
                      height: RFValue(24),
                      width: RFValue(24),
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              );
            },
            tabBarLabel: ({focused}) => {
              return (
                <Text
                  style={{
                    color: focused ? '#F30745' : '#999999',
                    fontSize: RFValue(12),
                    fontWeight: '400',
                    lineHeight: RFValue(14.52),
                  }}>
                  Home
                </Text>
              );
            },
          }}
        />
        <Tab.Screen
          name="ShortScreen"
          component={ShortScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Image
                    source={
                      focused
                        ? require('../assets/images/shorts-active.png')
                        : require('../assets/images/shorts.png')
                    }
                    style={{
                      height: RFValue(24),
                      width: RFValue(24),
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              );
            },
            tabBarLabel: ({focused}) => {
              return (
                <Text
                  style={{
                    color: focused ? '#F30745' : '#999999',
                    fontSize: RFValue(12),
                    fontWeight: '400',
                    lineHeight: RFValue(14.52),
                  }}>
                  Shorts
                </Text>
              );
            },
          }}
        />
        <Tab.Screen
          name="RewardScreen"
          component={RewardScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Image
                    source={
                      focused
                        ? require('../assets/images/reward-active.png')
                        : require('../assets/images/reward.png')
                    }
                    style={{
                      height: RFValue(24),
                      width: RFValue(24),
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              );
            },
            tabBarLabel: ({focused}) => {
              return (
                <Text
                  style={{
                    color: focused ? '#F30745' : '#999999',
                    fontSize: RFValue(12),
                    fontWeight: '400',
                    lineHeight: RFValue(14.52),
                  }}>
                  Rewards
                </Text>
              );
            },
          }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Image
                    source={
                      focused
                        ? require('../assets/images/profile-active.png')
                        : require('../assets/images/profile.png')
                    }
                    style={{
                      height: RFValue(24),
                      width: RFValue(24),
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              );
            },
            tabBarLabel: ({focused}) => {
              return (
                <Text
                  style={{
                    color: focused ? '#F30745' : '#999999',
                    fontSize: RFValue(12),
                    fontWeight: '400',
                    lineHeight: RFValue(14.52),
                  }}>
                  Profile
                </Text>
              );
            },
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

export default BottomTab;
