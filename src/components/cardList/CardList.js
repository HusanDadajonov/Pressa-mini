import React, {useEffect, useState,usePrevious} from 'react';
import Card from '../card/Card';
import './cardList.css'
import apiCalls from '../../config/api';


const CardList = () => {
    const [cardList, setCardList ] = useState([]);
    const [error, setError] = useState('');
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    // const prevGenre = usePrevious(props.genre);

    // const loadMore = () => {
    //     setPage(page + 1);
    //     console.log(page);
    //   };
      
    
     useEffect(() => {
      const getCards = async () => {
          try {
              const data = await apiCalls.getCards();
              setCardList(data);
              console.log(data)
          } catch (err) {
              setError(err.message);  
              console.log(err.message)    
          }
      }
      getCards();
    
  }, []);
    return (
        <div className='cardList'>
            <div className='row'>
                {cardList.map(el => <Card  cardEl={el} key={el.id} /> )}
            </div>
            {/* { page < totalPage ?  */}
            
            <button className='more-btn'  >yana yuklash</button> 
             {/* } */}
             {/* onClick={loadMore} */}
        </div>

    );
};

export default CardList;
