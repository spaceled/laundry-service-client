import React from 'react';
import CardCarouselTesting from '../Shared/CardCarousel/CardCarouselTesting';
import Item from '../Shared/CardCarousel/Item';
import H1 from '../Shared/H1';
import washing from '../../assets/icons/washing.svg';
import cleaner from '../../assets/icons/cleaner.svg';
import sewing from '../../assets/icons/sewing.svg';
import iron from '../../assets/icons/iron.svg';
import hanger from '../../assets/icons/hanger.svg';
import CardCarousel from '../Shared/CardCarousel/CardCarousel';

const Blog = (props) => {
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
  return (
    <div>
      <H1>This is Blog</H1>
      <CardCarousel></CardCarousel>
      <H1>This is GAP</H1>
      <CardCarouselTesting>
        <div>
        <Item>
          {
            cardInfo.map((tcase) => (
              <div className="card ">
                <div className="card-body items-center">
                  <img width="100" height="100" src={tcase.img} alt="" />
                  <div className="text-white text-center">
                    <h2 className="text-center font-bold text-xl uppercase p-3">{tcase.name}</h2>
                    <p className="">{tcase.description}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </Item>
        </div>
      </CardCarouselTesting>
    </div>
  );
};

export default Blog;

{/* <div className="card ">
              <div className="card-body items-center">
                <img width="100" height="100" src={tcase.cimage} alt="" />
                <div className="text-white text-center">
                  <h2 className="text-center font-bold text-xl uppercase p-3">{tcase.cimage}</h2>
                  <p className="">{tcase.ch1}</p>
                </div>
              </div>
            </div> */}