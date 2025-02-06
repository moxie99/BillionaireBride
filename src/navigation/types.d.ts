import React from 'react';
import {NavigatorScreenParams} from '@react-navigation/native';
export type AppRouteTypes = {
  SingleVideoScreen: any;
  Bottomtabs: NavigatorScreenParams<BottomTabParamList> | undefined;
};
export type BottomTabParamList = {
  HomeScreen: React.FC;
  ProfileScreen: React.FC;
  RewardScreen: React.FC;
  ShortScreen: React.FC;
};

export type AllScreensTypes = {
  SingleVideoScreen: React.FC;
  Bottomtabs: BottomTabParamList;
};

export type StackParamsList = AppRouteTypes;
declare global {
  namespace ReactNavigation {
    interface BottomTabParamList extends StackParamsList {}
  }
}
