import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {AppRouteTypes} from './types';
import SingleVideoScreen from '../screens/SingleVideoScreen';
import BottomTab from './BottomTab';
import {Platform} from 'react-native';

const RootNavigation = () => {
  const Stack = createStackNavigator<AppRouteTypes>();

  return (
    <Stack.Navigator
      initialRouteName={'Bottomtabs'}
      screenOptions={() => {
        return {
          // disable gestures
          animation: 'slide_from_bottom',
          cardStyleInterpolator:
            Platform.OS === 'ios'
              ? undefined
              : CardStyleInterpolators.forFadeFromBottomAndroid,
          headerShown: false,
        };
      }}>
      <Stack.Screen component={SingleVideoScreen} name="SingleVideoScreen" />
      <Stack.Screen component={BottomTab} name="Bottomtabs" />
    </Stack.Navigator>
  );
};

export default RootNavigation;
