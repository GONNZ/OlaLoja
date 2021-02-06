import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div id='cards' className='cards'>
      <h1>Check out our products!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/aretes.jpg'
              category="earrings"
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Earrings'
              path='/products'
            />
            <CardItem
              src='images/tobillera.jpg'
              category="anklets"
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Anklets'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Brazalete.jpg'
              category="bracelets"
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Bracelets'
              path='/products'
            />
            <CardItem
              src='images/Anillo.jpg'
              category="rings"
              text='Experience Football on Top of the Himilayan Mountains'
              label='Rings'
              path='/products'
            />
            <CardItem
              src='images/Collar.jpg'
              category="necklaces"
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Necklaces'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
