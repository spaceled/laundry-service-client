import React from 'react';
import washing from '../../../assets/icons/washing.svg';
import cleaner from '../../../assets/icons/cleaner.svg';
import sewing from '../../../assets/icons/sewing.svg';
import iron from '../../../assets/icons/iron.svg';
import hanger from '../../../assets/icons/hanger.svg';
import Carousel from "react-elastic-carousel";
import CarouselInfo from './CarouselInfo';


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];


const CardCarousel = ({children}) => {
  const cardInfo = [
    {
      _id: 1,
      name: 'laundry services',
      description: 'Let us pick up your dirty laundry, sort it, stains, wash, dry, fold and deliver back to you in one neat, easy package.',
      img: washing
    },

    {
      _id: 2,
      name: 'alterations & repairs',
      description: 'We have expert seamstresses and tailors on staff to ensure we meet and exceed your fitting requirements.',
      img: sewing
    },
    {
      _id: 3,
      name: 'steam iron',
      description: 'Let us pick up your dirty laundry, sort it, stains, wash, dry, fold and deliver back to you in one neat, easy package.',
      img: iron
    },
    {
      _id: 4,
      name: 'carpet cleaning',
      description: 'Let us pick up your dirty laundry, sort it, stains, wash, dry, fold and deliver back to you in one neat, easy package.',
      img: cleaner
    },
    {
      _id: 5,
      name: 'dry cleaning services',
      description: 'Let us pick up your dirty laundry, sort it, stains, wash, dry, fold and deliver back to you in one neat, easy package.',
      img: hanger
    },
    {
      _id: 6,
      name: 'shoe cleaning',
      description: 'Let us pick up your dirty laundry, sort it, stains, wash, dry, fold and deliver back to you in one neat, easy package.',
      img: washing
    },
  ]

  const testCase = [
    { 
      _cid: 1,
      cname: 'Carpet',
      image: 'green',
      h1: 'Great'
    },
    { 
      _cid: 2,
      cname: 'Marpet',
      cimage: 'Black',
      ch1: 'Mreat'
    },
    { 
      _cid: 3,
      cname: 'Larpet',
      cimage: 'Lreen',
      ch1: 'Lreat'
    },
    { 
      _cid: 4,
      cname: 'Jarpet',
      cimage: 'Jreen',
      ch1: 'Jreat'
    },
  ]


  return (
    <div>
      <Carousel breakPoints={breakPoints} className="-mt-10">
        {
          cardInfo.map(card => <CarouselInfo
            key={card._id}
            card={card}
          >
          </CarouselInfo>)
        }
      </Carousel>
    </div>
  );
};

export default CardCarousel;