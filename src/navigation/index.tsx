import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootNavigation from './RootNavigation';
import {navigationRef} from './ResetNavigator';

function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigation />
    </NavigationContainer>
  );
}

export default Navigation;
