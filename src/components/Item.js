import React from 'react';
import PropTypes from 'prop-types';

function Item(props){
	return (
		<>
			<div onClick = {() => props.whenItemClicked(props.id)}>
				<h3>{props.name}</h3>
			</div>
		</>
	);
}

Item.propTypes = {
	category: PropTypes.string,
	name: PropTypes.string,
	brand: PropTypes.string,
	price: PropTypes.number,
	ABV: PropTypes.number,
	pints: PropTypes.number,
	stock: PropTypes.string,
	id: PropTypes.string,
	whenItemClicked: PropTypes.func
};

export default Item;