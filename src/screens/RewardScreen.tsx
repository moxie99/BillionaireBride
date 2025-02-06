import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {addDoc, collection} from 'firebase/firestore';
import {FIRESTORE_DB} from '../utils/FirebaseConfig';

const RewardScreen = () => {
  const addTodo = async () => {
    try {
      const docRef = await addDoc(collection(FIRESTORE_DB, 'videos'), {
        id: '5',
        thumbnail:
          'https://img.freepik.com/free-psd/3d-cinema-blank-banner-background_23-2150822410.jpg?semt=ais_hybrid',
        video:
          'https://videos.pexels.com/video-files/2256158/2256158-sd_960_506_24fps.mp4',
        title: 'Why do we use it?',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };
  return (
    <View>
      <Text>RewardScreen</Text>
      <TouchableOpacity
        onPress={addTodo}
        style={{
          backgroundColor: 'red',
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}>
        <Text>Upload Video</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RewardScreen;
