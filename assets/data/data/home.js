import c1 from '../../data/data/c1.png'
import c2 from '../../data/data/c2.png'
import spag from '../../data/data/spaghetti.png'
import salad from '../../data/data/salad.png'
import rice from '../../data/data/rice.png'
import pizza from '../../data/data/pizza.png'
import coffee from '../../data/data/coffee.png'
import cocktail from '../../data/data/cocktail.png'
import burger from '../../data/data/burger.png'
import chicken from '../../data/data/chicken.png'
import res from '../../data/data/res.jpg'
import harry from '../../data/data/harry.jpg'
import pasta from '../../data/data/pasta.jpg'
export const categories = [
  {
    text: 'Chicken',
    img: chicken,

  },



  {
    text: 'Burger',
    img: burger,
  },


  {
    text: 'Rice',
    img: rice,

  },



  {
    text: 'Pizza',
    img: pizza,
  },


  {
    text: 'Pasta',
    img: spag,
  },

  {
    text: 'Salad',
    img: salad,
  },

  {
    text: 'Coffee',
    img: coffee,
  },

  {
    text: 'Cocktail',
    img: cocktail,
  },
  // {
  //   text: 'Offers',
  //   img: require('@/assets/data/c3.png'),
  // },
  // {
  //   text: 'Pickup',
  //   img: require('@/assets/data/c4.png'),
  // },
  // {
  //   text: 'HOP',
  //   img: require('@/assets/data/c5.png'),
  // },
  // {
  //   text: 'Pharmacy',
  //   img: require('@/assets/data/c6.png'),
  // },
];

export const restaurants = [
  {
    name: 'Vapiano',
    rating: '4.5 Excellent',
    ratings: '(500+)',
    distance: '0.7 miles away',
    img: res,
      tags: ['Italian', 'Pizza', 'Pasta', 'Salads'],
    duration: '35 - 45',
  },
  {
    name: '✨Urban Greens✨',
    id: '2',
    rating: '4.9 Excellent',
    ratings: '(500+)',
    distance: '1.7 miles away',
    img: harry,
        tags: ['Salads', 'Vegan', 'Healthy', 'British'],
    duration: '15 - 30',
  },
  {
    name: 'El Minero',
    id: '3',
    rating: '4.5 Excellent',
    ratings: '(500+)',
    distance: '3 miles away',
    img: pasta,
        tags: ['Spanish', 'Salads', 'Tpas', 'Pasta'],
    duration: '25 - 45',
  },
];
