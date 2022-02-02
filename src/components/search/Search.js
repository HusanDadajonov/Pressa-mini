import React, { useState } from 'react';
import './search.css'
import { BiSearch } from 'react-icons/bi';
// import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DateTimePicker from '@mui/lab/DateTimePicker';
// import DateAdapter from '@mui/lab/AdapterMoment';



const Search = () => {
  const [value, setValue] = useState(new Date('2022-08-18T21:11:54'));

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

// category boyicha filter qilish
// function filterNewsByCat(cat) {
//   let result = .filter((el) => {
//       return el.category == cat;
//   });

//   return result;
// }
  return (
    <div className='bigSearch'>
     
    <div className='row'> 
     
{/* 
      <LocalizationProvider dateAdapter={AdapterDateFns} >
        <Stack className="datepicker" spacing={3}>
          <DateTimePicker
            label="Sanani kiriting"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider> */}
      <div className="dropdown">
        <label className='dropdown__label' htmlFor="dropbtn"> Soha kategoriyasi</label>
        <button id='dropbtn' onClick={myFunction} className="dropbtn">Kichik tadbirkorlik</button>
        <div id="myDropdown" className="dropdown-content">
          <a href="#">Biznes</a>
          <a href="#">Marketing</a>
          <a href="#">Dizayn</a>
          <a href='#'>Liderlik</a>
          <a href='#' >Notiqlik </a>
        </div>
      </div>
      <div>
        <label className="squared">
        <input className='squared-input' type="checkbox"   />
        <span className='squared-span'></span>
    </label>
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
