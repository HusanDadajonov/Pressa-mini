import React, { useState } from 'react';
import CardList from '../../components/cardList/CardList';
import Search from '../../components/search/Search';
import Adversting from "../../components/Advertising/Adversting";
import './home.css'

const Home = () => {
  const [checkBall,setCheckball] = useState(true);
  const [selectVal,setSelectVal] = useState("");
  const [inpValu,setInpval] = useState("");
  const [searchCheck,setSearchCheck] = useState(false);
  const [date,setDate] = useState("")

  let newDate =  date.split('-')[2] + '/' + date.split('-')[1] + '/' + date.split('-')[0]
  
  return (
    <div className='intro'>
      <div className='container'>
        <div className='intro-info'>
          <h1 className='intro-title'>Reference site giving information on its origins, as well as a random Lipsum generator. </h1>
          <p className='intro-text'>Reference site giving information on its origins, as well as a random Lipsum generator. </p>

        </div>
        <Search setDate={setDate} checkBall={checkBall} setCheckball={setCheckball} setSelectVal={setSelectVal} setInpval={setInpval} setSearchCheck={setSearchCheck}/>
        <CardList newDate={newDate} setSearchCheck={setSearchCheck} checkBall={checkBall ? "ON" : "OFF"} inpValu={inpValu} selectVal={selectVal} searchCheck={searchCheck} />
        <div className='row' >
          <Adversting />
          <Adversting />
        </div>

      </div>
    </div>
  )
};

export default Home;
