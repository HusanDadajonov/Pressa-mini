import React from 'react';
import './card.css';

const Card = ({ cardEl }) => {

  const IMG_URL = 'https://mok2-pressa.herokuapp.com/data'
  return (
  <div className='card'>
      <div className='card-info' >
          <h3 className='info-title'> {cardEl.title} </h3>
          <div className='info-content'>
            <div>
              <p className='info-content-title'>Tadbir sanasi:</p>
              <span className='info-content-text'>{ cardEl.date}</span>
           </div>
           <div>
               <p className='info-content-title'>Speaker:</p>
               <span className='info-content-text'> Ikrom Sharif</span>
           </div>
           
          </div> 
          <span>{cardEl.watch_type}</span> <br/>
          {cardEl.category}
      </div>
      <div className='card-img' >
          <img  className='card-img__img' src={IMG_URL +  cardEl.img}/>
      </div>

  </div>
  );
};

export default Card;
