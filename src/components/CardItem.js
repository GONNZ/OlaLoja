import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={`${props.path}/${props.category}`}>
          <figure className='cards__item__pic-wrap' data-category={props.category}>
            <img
              className='cards__item__img'
              alt='Travel'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>

          <p className='cards__item__text'>{props.name ? `Name: ${props.name}`:null}</p>
            <h5 className='cards__item__text'>{props.text}</h5>
            
            <p className='cards__item__text'>{props.price ? `Price: ${props.price}`:null}</p>
            <p></p>
          </div>
        </Link>
      </li>
    </>
  );
}


/*

*/

export default CardItem;
