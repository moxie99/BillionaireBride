import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {RFValue} from 'react-native-responsive-fontsize';

interface ListHeaderProps {
  text: string;
}

const ListHeader: React.FC<ListHeaderProps> = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <AntDesign name="right" size={12} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: RFValue(20),
    paddingHorizontal: RFValue(15),
  },
  text: {
    fontSize: RFValue(21),
    color: '#fff',
    fontWeight: '600',
    lineHeight: RFValue(25.41),
  },
});

export default ListHeader;
