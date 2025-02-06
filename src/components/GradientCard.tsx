import React from 'react';
import {Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {RFValue} from 'react-native-responsive-fontsize';

interface GradientCardProps {
  title: string;
  colors: string[];
}

export const GradientCard: React.FC<GradientCardProps> = ({title, colors}) => (
  <LinearGradient colors={colors} style={styles.card}>
    <Text style={styles.text}>{title}</Text>
  </LinearGradient>
);
const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    marginHorizontal: 10,
    width: RFValue(146),
    height: RFValue(80),
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    position: 'absolute',
    top: RFValue(40),
    left: RFValue(20),
  },
});
