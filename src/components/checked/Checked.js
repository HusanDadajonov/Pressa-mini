import React, { useState } from 'react';
import './checked.css'

const Checked = ({setCheckball,checkBall}) => {
	
	return (
		<>

			<input type="checkbox"  className="checkbox" id="chk" />
			<label className="label" onClick={()=> setCheckball(!checkBall)} htmlFor="chk">
				<div className={checkBall == false ? "ball toggle" : "ball"}></div> 
			</label>
		</>

	);
};

export default Checked;
