import React, { useEffect, useState } from 'react';
import './search.css'
import { BiSearch } from 'react-icons/bi';
import Checked from '../checked/Checked';
// import _ from "lodash";npm i date-fns
// import * as React from 'react';/
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DateAdapter from '@mui/lab/AdapterMoment';



const Search = ({ cardEl }) => {
  const [value, setValue] = useState(new Date('2022-08-18T21:11:54'));
  const [checkbox, setCheckbox] = useState(false);
  const [cat, setCat] = useState ([]);
  const [cardList, setCardList ] = useState([]);

  const handleChange = (newValue) => {
    setValue(newValue);
  };
 
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
document.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// useEffect(() => {
//  fetch('https://mok2-pressa.herokuapp.com/ad').then((response) => {
//    setCardList(response.date.cardList);
//   setCat(response.date.cardList);
//   setCategories(_.uniqBy(response.data.courses.map(cardList => 
//     cardList.category), 'category')
//  )})
// },[])
  return (
    <div className='bigSearch'>
     
    <div className='row'> 
     

      <LocalizationProvider dateAdapter={AdapterDateFns} >
        <Stack className="datepicker" spacing={3}>
          <DateTimePicker
            label="Sanani kiriting"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
      <div className="dropdown">
        <label className='dropdown__label' htmlFor="dropbtn"> Soha kategoriyasi</label>
        <button id='dropbtn' onClick={myFunction} className="dropbtn">Kichik tadbirkorlik</button>
        <div id="myDropdown" className="dropdown-content">
        <button type="button" className='dropdown__btn'>All</button>
          <button type='button' className='dropdown__btn'>Biznes</button>
          <button type='button' className='dropdown__btn' >Marketing</button>
          <button type='button' className='dropdown__btn'>Dizayn</button>
          <button type='button' className='dropdown__btn'>Liderlik</button>
          <button type='button' className='dropdown__btn'>Notiqlik </button>
        </div>
      </div>
      <div className='row'>
        <Checked  check={setCheckbox} />
        <span className='check-box-div'>
          <span className=' check-box offline'>Offline</span>
        <span className='check-box online'>Online </span>
        </span>
      </div>      
    </div>
      <div className='search-input'>
        <label className='search-div__label' htmlFor='search'>Speaker ismi sharifi  </label>
        <div className='search-div'>
          <BiSearch className='search-div__icon' />
          <input className='search-div__input' id="search" type="search" placeholder='Speaker' />
        </div>
      </div>
    
    
 </div> 
  );
};

export default Search;
