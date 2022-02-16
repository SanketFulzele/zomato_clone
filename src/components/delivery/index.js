import React from 'react';
import Filters from '../common/filters';
import "./delivery.css";
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';
import DeliveryCollections from './deliveryCollections';
import TopBrands from './topBrands';
import ExploreSection from '../common/exploreSection';
import { restaurants } from '../../data/restaurants';



const deliveryFilters = [
  {
    id:1,
    icon: <FilterListIcon className='absolute-center'/>,
    title: "Filters",
  },
  {
    id:2,
    title: "Rating: 4.0+",
  },
  {
    id:3,
    title: "Safe and Hygienic",
  },
  {
    id:4,
    title: "Pure Veg",
  },
  {
    id:5,
    title: "Delivery Time",
    icon: <SortIcon className='absolute-center ' />
  },
  {
    id:6,
    title: "Great Offers",
  },
]

const restaurantList = restaurants;

const Delivery = () => {
  return (
    <div> 
    <div className="max-width">
      <Filters filterList={deliveryFilters} />
    </div>
      <DeliveryCollections />
      <TopBrands />
      <ExploreSection list={restaurantList} collectionName="Delivery Restaurants in Lucknow" />
      </div>
    );
};

export default Delivery;
