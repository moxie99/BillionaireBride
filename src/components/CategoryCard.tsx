import {FlatList} from 'react-native';
import React from 'react';
import {GradientCard} from './GradientCard';

interface CardData {
  id: string;
  title: string;
  colors: string[];
}

const data: CardData[] = [
  {id: '1', title: 'Drama', colors: ['#B0C4DE', '#1E3A5F']},
  {id: '2', title: 'Crime', colors: ['#00BFFF', '#4169E1']},
  {id: '3', title: 'Comedy', colors: ['#FF6B6B', '#2E2E2E']},
  {id: '4', title: 'Action', colors: ['#FF6347', '#2F4F4F']},
  {id: '5', title: 'Romance', colors: ['#FFB6C1', '#800080']},
  {id: '6', title: 'Horror', colors: ['#8B0000', '#FF4500']},
  {id: '7', title: 'Adventure', colors: ['#228B22', '#FFD700']},
];
const CategoryCard = () => {
  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <GradientCard title={item.title} colors={item.colors} />
      )}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default CategoryCard;
