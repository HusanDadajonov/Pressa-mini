import React from 'react';
import './checked.css'

const Checked = () => {
	return (
		<>
			<input type="checkbox" className="checkbox" id="chk" />
			<label className="label" htmlFor="chk">
				<div className="ball"></div>
			</label>
		</>

	);
};

export default Checked;
