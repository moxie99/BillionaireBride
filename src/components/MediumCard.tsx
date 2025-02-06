import React from 'react';
import {View, Image, FlatList, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

interface Show {
  id: string;
  title: string;
  image: string;
  genres: string[];
}

const shows: Show[] = [
  {
    id: '1',
    title: 'Black Doves',
    image:
      'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWUlMjBwb3N0ZXJ8ZW58MHx8MHx8fDA%3D',
    genres: ['Detective', 'Drama'],
  },
  {
    id: '2',
    title: 'No Good Deed',
    image:
      'https://images.unsplash.com/photo-1559583109-3e7968136c99?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdmllJTIwcG9zdGVyfGVufDB8fDB8fHww',
    genres: ['Detective', 'Drama'],
  },
  {
    id: '3',
    title: 'Black Doves',
    image:
      'https://images.unsplash.com/photo-1611419010196-a360856fc42f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdmllJTIwcG9zdGVyfGVufDB8fDB8fHww',
    genres: ['Detective', 'Drama'],
  },
  {
    id: '4',
    title: 'No Good Deed',
    image:
      'https://c8.alamy.com/comp/EJWP0H/titanic-movie-poster-1997-EJWP0H.jpg',
    genres: ['Detective', 'Drama'],
  },
];

const ShowCard: React.FC<{show: Show}> = ({show}) => (
  <View style={styles.card}>
    <Image source={{uri: show.image}} style={styles.image} />
  </View>
);

const MediumCard: React.FC = () => {
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
    width: RFValue(170),
    marginRight: RFValue(10),
  },
  image: {
    width: '100%',
    height: RFValue(150),
    borderRadius: RFValue(10),
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

export default MediumCard;
