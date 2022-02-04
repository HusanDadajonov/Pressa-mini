import React from 'react';
import './checked.css'

const Checked = ({check}) => {
	return (
		<>
			<input type="checkbox" onClick={(e) =>check(e.target.checked) } className="checkbox" id="chk" />
			<label className="label" htmlFor="chk">
				<div className="ball"></div> 
			</label>
		</>

	);
};

export default Checked;
