import React from 'react';
import './checked.css'

const Checked = ({setCheck}) => {
	return (
		<>
<<<<<<< HEAD
			<input type="checkbox" onClick={(e) =>setCheck(e.target.checked) } className="checkbox" id="chk" />
			
=======
			<input type="checkbox" onClick={(e) =>check(e.target.checked) } className="checkbox" id="chk" />
>>>>>>> ae872aa255055bc2360838af755cc6422e44795a
			<label className="label" htmlFor="chk">
				<div className="ball"></div> 
			</label>
		</>

	);
};

export default Checked;
