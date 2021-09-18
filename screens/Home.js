import React from 'react';
import Screen from '../components/misc/Screen';
import InvestmentViewList from '../components/organisms/InvestmentViewList';

const data = [
  {
    address: '310 Bobolink Ridge knknknjhbjhbjhbhjbhjbhjagagag',
    city: 'Ottawa',
    state: 'ON',
    misc: '8888 sqft.',
    change_percent: 8.88,
    change_absolute: 888,
    image_url:
      'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg',
  },
  {
    address: '310 Bobolink Ridge knknknjhbjhbjhbhjbhjbhjagagag',
    city: 'Ottawa',
    state: 'ON',
    misc: '8888 sqft.',
    change_percent: 8.88,
    change_absolute: 888,
    image_url:
      'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg',
  },
];

const Home = () => {
  return (
    <Screen>
      <InvestmentViewList investments={data} />
    </Screen>
  );
};

export default Home;
