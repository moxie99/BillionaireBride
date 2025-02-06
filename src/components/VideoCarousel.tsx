/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
} from 'react-native';
import Video, {VideoRef} from 'react-native-video';
import {BlurView} from '@react-native-community/blur';
import {Ionicons} from '@expo/vector-icons';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';
import {collection, onSnapshot} from 'firebase/firestore';
import {FIRESTORE_DB} from '../utils/FirebaseConfig';
import {VideoItemType} from '../utils/types';
import Loader from './Loader/Loader';

const {width, height} = Dimensions.get('window');
const ITEM_HEIGHT = height / 2;

export const videosList = [
  {
    id: '1',
    thumbnail:
      'https://c8.alamy.com/comp/EJWP0H/titanic-movie-poster-1997-EJWP0H.jpg',
    video:
      'https://videos.pexels.com/video-files/30462167/13054244_640_360_30fps.mp4',
    title: "Secret Man's World",
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  },
  {
    id: '2',
    thumbnail:
      'https://img.freepik.com/premium-vector/cinema-elements-illustration_34401-245.jpg?semt=ais_hybrid',
    video:
      'https://videos.pexels.com/video-files/7049216/7049216-sd_360_640_30fps.mp4',
    title: "Funny Man's World",
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '3',
    thumbnail:
      'https://img.freepik.com/premium-psd/movie-3d-text-effect_524190-1659.jpg?semt=ais_hybrid',
    video:
      'https://videos.pexels.com/video-files/6541448/6541448-sd_640_360_25fps.mp4',
    title: 'Finibus Bonorum et Malorum',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit',
  },
  {
    id: '4',
    thumbnail:
      'https://img.freepik.com/premium-photo/cinema-film-roll-red-carpet-3d-illustration_252025-571.jpg?semt=ais_hybrid',
    video:
      'https://videos.pexels.com/video-files/8439147/8439147-sd_640_360_25fps.mp4',
    title: 'What is Lorem Ipsum?',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
  },
  {
    id: '5',
    thumbnail:
      'https://img.freepik.com/free-psd/3d-cinema-blank-banner-background_23-2150822410.jpg?semt=ais_hybrid',
    video:
      'https://videos.pexels.com/video-files/2256158/2256158-sd_960_506_24fps.mp4',
    title: 'Why do we use it?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

const VideoCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [videosLists, setVideosLists] = useState<VideoItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Track loading state
  const [playStates, setPlayStates] = useState<boolean[]>(
    new Array(videosList.length).fill(false),
  );
  const videoRef = useRef<VideoRef>(null);
  const flatListRef = useRef<FlatList>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const navigation = useNavigation();

  // Function to handle video play after delay
  const startVideoAfterDelay = (index: number) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    } // Clear previous timer
    timerRef.current = setTimeout(() => {
      const updatedPlayStates = [...playStates];
      updatedPlayStates[index] = true; // Start the video after 3 seconds
      setPlayStates(updatedPlayStates);
    }, 3000); // 3-second delay
  };

  const onViewableItemsChanged = ({viewableItems}: any) => {
    const visibleIndex = viewableItems[0]?.index ?? 0;
    setActiveIndex(visibleIndex);

    // Stop any previous video from playing
    const updatedPlayStates = [...playStates];
    updatedPlayStates.forEach((_, idx) => (updatedPlayStates[idx] = false));

    // Set the new video to play after 3 seconds
    startVideoAfterDelay(visibleIndex);

    setPlayStates(updatedPlayStates);
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
  const renderItem = ({item, index}: {item: any; index: number}) => (
    <View style={styles.itemContainer}>
      <ImageBackground source={{uri: item.thumbnail}} style={styles.thumbnail}>
        <BlurView style={styles.blurView} blurType="dark" blurAmount={10} />
        <Video
          ref={videoRef}
          source={{uri: item.video}}
          style={styles.video}
          resizeMode="cover"
          repeat
          playInBackground={false}
          playWhenInactive={false}
          paused={!playStates[index]}
          poster={{
            source: {uri: `${item.thumbnail}`},
            resizeMode: 'cover',
          }}
        />
      </ImageBackground>
    </View>
  );

  if (loading) {
    return (
      <Loader title="Please hold on, we are fetching videos for your view" />
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.searchIcon}>
        <Ionicons name="search" size={24} color="white" />
      </TouchableOpacity>
      <FlatList
        ref={flatListRef}
        data={videosLists}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={event => {
          const index = Math.floor(event.nativeEvent.contentOffset.x / width);
          setActiveIndex(index);
        }}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}
      />
      <View style={styles.controlsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              fontSize: RFValue(14),
              fontWeight: '400',
              color: '#FFFFFF99',
            }}>
            New
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              fontSize: RFValue(14),
              fontWeight: '400',
              color: '#FFFFFF99',
            }}>
            Detective
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              fontSize: RFValue(14),
              fontWeight: '400',
              color: '#FFFFFF99',
            }}>
            Crime
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Bottomtabs', {
            screen: 'ShortScreen',
            params: {videoData: videosList[activeIndex]},
          });
        }}
        style={styles.playButton}>
        <Ionicons name="play" size={18} color="#000" />
        <Text style={{fontWeight: '700', fontSize: RFValue(17)}}>Play</Text>
      </TouchableOpacity>
      <View style={styles.indicatorContainer}>
        {videosLists.map((_, index) => (
          <View
            key={index}
            style={
              index === activeIndex
                ? styles.activeIndicator
                : styles.inactiveIndicator
            }
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    width,
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    justifyContent: 'flex-end',
  },
  blurView: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  video: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  searchIcon: {
    position: 'absolute',
    top: RFValue(30),
    left: RFValue(20),
    zIndex: 1,
  },
  controlsContainer: {
    position: 'absolute',
    bottom: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: RFValue(10),
    paddingHorizontal: RFValue(20),
  },
  playButton: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 20,
    backgroundColor: '#fff',
    paddingVertical: RFValue(10),
    paddingHorizontal: RFValue(50),
    borderRadius: 12,
    gap: RFValue(3),
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 5,
    flexDirection: 'row',
  },
  activeIndicator: {
    width: 20,
    height: 5,
    backgroundColor: '#F30745',
    marginHorizontal: 5,
    borderRadius: 3,
  },
  inactiveIndicator: {
    width: 5,
    height: 5,
    backgroundColor: '#999999',
    marginHorizontal: 5,
    borderRadius: 3,
  },
});

export default VideoCarousel;
