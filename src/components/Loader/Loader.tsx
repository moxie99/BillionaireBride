/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {RFValue} from 'react-native-responsive-fontsize';

const AnimatedBox = Animated.createAnimatedComponent(View);

interface LoaderProps {
  title?: string;
}

const Loader = ({title = 'Fetching Videos...'}: LoaderProps) => {
  const opacity = useSharedValue(1);
  opacity.value = withRepeat(
    withTiming(0.2, {duration: 1000, easing: Easing.ease}),
    -1,
    true,
  );
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <View style={styles.loaderContainer}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={[1, 1, 1, 1, 1, 1, 1]}
        renderItem={() => {
          return (
            <AnimatedBox style={[styles.loaderItem, animatedStyle]}>
              <View
                style={{
                  width: 80,
                  height: 80,
                  backgroundColor: '#9e9e9e',
                  opacity: 0.2,
                }}
              />
              <View style={{width: '80%', marginLeft: 10}}>
                <View
                  style={{
                    width: '80%',
                    height: 30,
                    backgroundColor: '#9e9e9e',
                    opacity: 0.2,
                  }}
                />
                <View
                  style={{
                    width: 100,
                    height: 40,
                    backgroundColor: '#9e9e9e',
                    opacity: 0.2,
                    marginTop: 10,
                  }}
                />
              </View>
            </AnimatedBox>
          );
        }}
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loaderContainer: {
    alignItems: 'center',
    width: '100%',
    height: Dimensions.get('window').height * 0.45,
    justifyContent: 'center',
    padding: RFValue(20),
  },
  loaderItem: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    height: RFValue(100),
    marginTop: RFValue(10),
    width: '100%',
  },
  title: {
    color: '#333',
    fontSize: RFValue(12),
    fontWeight: 'bold',
  },
});
