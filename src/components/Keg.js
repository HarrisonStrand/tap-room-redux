import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
	return (
		<>
			<div onClick = {() => props.whenKegClicked(props.id)}>
				<h3>{props.name}</h3>
			</div>
		</>
	);
}

Keg.propTypes = {
	name: PropTypes.string,
	brand: PropTypes.string,
	price: PropTypes.number,
	ABV: PropTypes.number,
	pints: PropTypes.number,
	stock: PropTypes.string,
	id: PropTypes.string,
	whenKegClicked: PropTypes.func
};

export default Keg;