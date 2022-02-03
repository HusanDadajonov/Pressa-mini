import React from 'react';
import './card.css';
import {BsFillArrowRightCircleFill} from 'react-icons/bs';

const Card = ({ cardEl }) => {

  const IMG_URL = 'https://mok2-pressa.herokuapp.com/data'
  return (
  <div className='card'>
     <div className='card-hover'>
    <ul className="ul">
    <a href={`/ad/active/${cardEl.id}`} > 
       <li>
        <BsFillArrowRightCircleFill className='card-icon'/>
       </li>
    </a> 
    <li className='info-content'>
       {cardEl.watch_type}
    </li>
   </ul>
      <div className='card-info' >
          <h3 className='info-title'> {cardEl.title} </h3>
          <span>{cardEl.category}</span>        
          <div className='info-content'>
            <div>
              <p className='info-content-title'>Tadbir sanasi:</p>
              <span className='info-content-text'>{cardEl.date}</span>
           </div>
           <div>
               <p className='info-content-title'>Speaker:</p>
               <span className='info-content-text'>{`${cardEl.user.first_name} ${cardEl.user.last_name}`}</span>
           </div>
           
          </div> 
          
      </div>
      <div className='card-img' >
          <img  className='card-img__img' src={IMG_URL +  cardEl.img}/>
      </div>
</div>
  </div>
  );
};

export default Card;
