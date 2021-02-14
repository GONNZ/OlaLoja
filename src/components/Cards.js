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
              text='Always wear earrings at the very least'
              label='Earrings'
              path='/products'
            />
            <CardItem
              src='images/tobillera.jpg'
              category="anklets"
              text="Life isn't perfect but your anklets can be"
              label='Anklets'
              path='/products'
            />
             <CardItem
              src='images/Collar.jpg'
              category="necklaces"
              text='Necklaces make everything better'
              label='Necklaces'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Brazalete.jpg'
              category="bracelets"
              text='Good bracelets work for every season'
              label='Bracelets'
              path='/products'
            />
            <CardItem
              src='images/Anillo.jpg'
              category="rings"
              text='Rings always fits'
              label='Rings'
              path='/products'
            />
             <CardItem
              src='images/Others.jpg'
              category="others"
              text='Shine is my favorite accessory'
              label='Others'
              path='/products'
            />
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
