/* eslint-disable react-native/no-inline-styles */
import {Ionicons} from '@expo/vector-icons';
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Video, {VideoRef} from 'react-native-video';
import {VideoItemType} from '../utils/types';
import {collection, onSnapshot} from 'firebase/firestore';
import {FIRESTORE_DB} from '../utils/FirebaseConfig';
import Loader from '../components/Loader/Loader';

const {height, width} = Dimensions.get('window');

const truncateText = (text: string, wordLimit: number) => {
  const words = text?.split(' ');
  return words?.length > wordLimit
    ? words?.slice(0, wordLimit).join(' ') + '...'
    : text;
};
const VideoItem = ({
  uri,
  description,
  title,
  thumbnail,
  isVisible,
}: {
  uri: string;
  description: string;
  title: string;
  thumbnail: string;
  isVisible: boolean;
}) => {
  const videoRef = useRef<VideoRef | null>(null);

  return (
    <View style={{height, width: '100%', justifyContent: 'flex-end'}}>
      <Video
        ref={videoRef}
        source={{uri}}
        style={{position: 'absolute', top: 0, left: 0, width: '100%', height}}
        resizeMode="cover"
        repeat
        playInBackground={true}
        fullscreenAutorotate={true}
        paused={!isVisible} // Pause the video if it's not visible
        playWhenInactive={true}
        poster={{
          source: {uri: `${thumbnail}`},
          resizeMode: 'cover',
        }}
      />
      <View style={{position: 'absolute', bottom: 100, left: 10}}>
        <Text
          style={{
            color: 'white',
            fontSize: RFValue(16),
            fontWeight: '700',
            paddingBottom: 10,
          }}>
          {title}
        </Text>
        <View style={{width: width * 0.7}}>
          <Text
            style={{
              color: 'white',
              fontSize: RFValue(16),
              textAlign: 'justify',
            }}>
            {truncateText(description, 12)}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F30745',
            borderRadius: 5,
            gap: RFValue(3),
            height: RFValue(40),
            width: RFValue(200),
            marginTop: 10,
          }}>
          <Ionicons name="play" size={18} color="#fff" />
          <Text
            style={{fontWeight: '700', fontSize: RFValue(17), color: '#fff'}}>
            Play
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 100,
          right: 10,
          alignItems: 'center',
        }}>
        <TouchableOpacity style={{marginBottom: 20}}>
          <Image
            source={require('../assets/images/favourite.png')}
            style={{height: RFValue(36), width: RFValue(26)}}
          />
          <Text
            style={{color: '#fff', fontSize: RFValue(12), fontWeight: '400'}}>
            11.5K
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginBottom: 20}}>
          <Image
            source={require('../assets/images/save.png')}
            style={{height: RFValue(36), width: RFValue(26)}}
          />
          <Text
            style={{color: '#fff', fontSize: RFValue(12), fontWeight: '400'}}>
            312
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginBottom: 20}}>
          <Image
            source={require('../assets/images/forward.png')}
            style={{height: RFValue(36), width: RFValue(26)}}
          />
          <Text
            style={{color: '#fff', fontSize: RFValue(12), fontWeight: '400'}}>
            20
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const ShortScreen = ({route}: {route: any}) => {
  const [viewableItems, setViewableItems] = useState<any>([]);
  const [videosLists, setVideosLists] = useState<VideoItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Track loading state

  const onViewableItemsChanged = ({viewableItems}: any) => {
    setViewableItems(viewableItems);
  };

  useEffect(() => {
    const todoRef = collection(FIRESTORE_DB, 'videos');
    const subscriber = onSnapshot(todoRef, {
      next: snapshot => {
        const todos: any[] = [];
        snapshot.docs.forEach(doc => {
          todos.push({
            firebaseId: doc.id,
            ...doc.data(),
          });
        });
        setVideosLists(todos);
        setLoading(false);
      },
      error: err => {
        console.error('Error fetching videos:', err);
        setLoading(false);
      },
    });
    return () => subscriber();
  }, []);
  const videoData = route?.params?.videoData ?? null;
  const modifiedData = videoData
    ? [
        videoData,
        ...videosLists.filter((item: {id: any}) => item.id !== videoData.id),
      ]
    : videosLists;

  if (loading) {
    return (
      <Loader title="Please wait, we are fetching other videos for your view" />
    );
  }
  return (
    <FlatList
      data={modifiedData}
      keyExtractor={item => item.id}
      snapToAlignment="start"
      renderItem={({item}) => (
        <VideoItem
          title={item?.title}
          uri={item?.video}
          description={item.description}
          thumbnail={item?.thumbnail}
          isVisible={viewableItems.some(
            (viewableItem: any) => viewableItem.key === item.id,
          )}
        />
      )}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      onViewableItemsChanged={onViewableItemsChanged}
    />
  );
};

export default ShortScreen;
