import React, { useEffect, useState } from 'react';
import './search.css'
import { BiSearch } from 'react-icons/bi';
import Checked from '../checked/Checked';



const Search = ({ cardEl,setCheckball,checkBall,setInpval ,setSelectVal,setSearchCheck,setDate}) => {
  
  const [value, setValue] = useState(new Date('2022-08-18T21:11:54'));
  const [checkbox, setCheckbox] = useState(false);
  const [cat, setCat] = useState ([]);
  const [cardList, setCardList ] = useState([]);
  

  const handleChange = (e) => {
    e.preventDefault();
    setSearchCheck(true)
  };

  return (
    <form className='bigSearch' onSubmit={handleChange}>
     
      <div className='row'> 
        <div className="dropdown">
          <label className='dropdown__label' htmlFor="dropbtn"> Soha kategoriyasi</label>
          <div className='drowpdown__wrap'>
            <input type="date" className='dropbtn' onChange={(e)=> setDate(e.target.value)} />
            <select onChange={(e)=> setSelectVal(e.target.value)} className='dropbtn'>
              <option selected hidden disabled>Kichik tadbirkorlik</option>
              <option>IT</option>
              <option>Biznes</option>
              <option>Ta'lim</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <Checked  setCheckball={setCheckball} checkBall={checkBall}/>
          <span className='check-box-div'>
            <span className='check-box online'>Online </span>
            <span className=' check-box offline'>Offline</span>
          </span>
        </div>      
      </div>
        <div className='search-input'>
          <label className='search-div__label' htmlFor='search'>Speaker ismi sharifi  </label>
          <div className='search-div'>
            <BiSearch className='search-div__icon' />
            <input onChange={(e)=> setInpval(e.target.value)} className='search-div__input' id="search" type="search" placeholder='Speaker' autoComplete='off'/>
            <button className='dropbtn search-btn'>Search</button>
          </div>
        </div>
    
    
 </form> 
  );
};

export default Search;
