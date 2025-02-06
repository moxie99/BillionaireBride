/* eslint-disable react-native/no-inline-styles */
import {ScrollView} from 'react-native';
import React from 'react';
import VideoCarousel from '../components/VideoCarousel';
import ListHeader from '../components/ListHeader';
import CategoryCard from '../components/CategoryCard';
import DetectiveDramaList from '../components/DetectiveDramaList';
import MediumCard from '../components/MediumCard';
import {shows, shows2, shows3, shows4, shows5} from '../utils/data';

const HomeScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#000'}}>
      <VideoCarousel />
      <ListHeader text="Continue watching" />
      <MediumCard />
      <ListHeader text="Most Trending" />
      <DetectiveDramaList shows={shows} />
      <ListHeader text="By category" />
      <CategoryCard />
      <ListHeader text="For you" />
      <DetectiveDramaList shows={shows2} />
      <ListHeader text="Drama" />
      <DetectiveDramaList shows={shows3} />
      <ListHeader text="Romance" />
      <DetectiveDramaList shows={shows4} />
      <ListHeader text="Documentary" />
      <DetectiveDramaList shows={shows5} />
    </ScrollView>
  );
};

export default HomeScreen;
