import React, {useEffect, useState,usePrevious} from 'react';
import Card from '../card/Card';
import './cardList.css'

const CardList = ({checkBall,inpValu,selectVal,searchCheck,setSearchCheck,newDate}) => {
    const [cardList, setCardList ] = useState([]);
    const [error, setError] = useState('');
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [pages,setPages] = useState(1);;
    useEffect(async () => {
        const response = await fetch("https://mok2-pressa.herokuapp.com/ad"+(checkBall ? '?format='+checkBall+'&' : '')+(selectVal ? 'category='+selectVal+'&' : '')+(inpValu ? 'search='+inpValu+'&' : '')+(pages>1 ? 'page='+pages+'&' : pages)+((newDate.length > 2)  ? 'date='+newDate+'&' : ''))
        const data = await response.json()
        setCardList(data)
        setSearchCheck(false)
        if(data.length == 0)setPages(1)
        console.log("https://mok2-pressa.herokuapp.com/ad"+(checkBall ? '?format='+checkBall+'&' : '')+(selectVal ? 'category='+selectVal+'&' : '')+(inpValu ? 'search='+inpValu+'&' : '')+(+pages>1 ? 'page='+pages+'&' : '')+((newDate.length > 2)  ? 'date='+newDate+'&' : ''));
    },[searchCheck,pages]);



    return (
        <div className='cardList'>
            <div className='row'>
                {cardList.map(el => <Card  cardEl={el} key={el.id} /> )}
            </div>
            <button className='more-btn'onClick={()=> setPages(pages + 1)} >yana yuklash</button> 
        </div>

    );
};

export default CardList;
