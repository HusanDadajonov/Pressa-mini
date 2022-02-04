import React from 'react';
import CardList from '../../components/cardList/CardList';
import Search from '../../components/search/Search';
import Adversting from "../../components/Advertising/Adversting";
import './home.css'

const Home = () => {
  return (
    <div className='intro'>
      <div className='container'>
        <div className='intro-info'>
          <h1 className='intro-title'>Reference site giving information on its origins, as well as a random Lipsum generator. </h1>
          <p className='intro-text'>Reference site giving information on its origins, as well as a random Lipsum generator. </p>

        </div>
        <Search />
        <CardList />
        <div className='row' >
          <Adversting />
          <Adversting />
        </div>

      </div>
    </div>
  )
};

export default Home;
