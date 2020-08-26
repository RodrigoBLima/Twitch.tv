<<<<<<< HEAD
import React from 'react';
=======
import React from "react";

import data from "./data";
>>>>>>> video-entrypoint

import {
  List,
  CategoryContainer,
  CategoryImage,
  CategoryName,
<<<<<<< HEAD
  CategoryStatus,
  RedCircle,
  Info,
} from './styles';

import data from './data';

interface ItemProps {
=======
  RedCircle,
  Info,
  CategoryStatus,
} from "./styles";

interface itemProps {
>>>>>>> video-entrypoint
  item: typeof data[0];
}

const CategoryList: React.FC = () => {
<<<<<<< HEAD
  const CategoryItem: React.FC<ItemProps> = ({ item }) => (
=======
  const CategoryItem: React.FC<itemProps> = ({ item }) => (
>>>>>>> video-entrypoint
    <CategoryContainer>
      <CategoryImage source={item.source} />
      <CategoryName numberOfLines={1}>{item.name}</CategoryName>
      <CategoryStatus>
        <RedCircle />
        <Info>51.9K</Info>
      </CategoryStatus>
    </CategoryContainer>
  );

  return (
    <List>
      {data.map((item) => (
        <CategoryItem key={item.name} item={item} />
      ))}
    </List>
  );
};

export default CategoryList;
