import React from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Show} from '../utils/types';

interface DetectiveDramaListProps {
  shows: Show[];
}

const ShowCard: React.FC<{show: Show}> = ({show}) => (
  <View style={styles.card}>
    <Image source={{uri: show.image}} style={styles.image} />
    <Text style={styles.genres}>{show.genres.join('  ')}</Text>
    <Text style={styles.title}>{show.title}</Text>
  </View>
);

const DetectiveDramaList: React.FC<DetectiveDramaListProps> = ({shows}) => {
  return (
    <FlatList
      data={shows}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <ShowCard show={item} />}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: RFValue(10),
  },
  card: {
    width: RFValue(146),
    marginRight: RFValue(10),
  },
  image: {
    width: '100%',
    height: RFValue(220),
    borderRadius: RFValue(8),
  },
  genres: {
    fontSize: RFValue(12),
    color: 'gray',
    marginTop: RFValue(5),
  },
  title: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
    marginTop: RFValue(5),
    color: '#fff',
  },
});

export default DetectiveDramaList;
