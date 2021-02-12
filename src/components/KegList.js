import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {

	return (
		<>
			{props.kegList.map((keg) => 
			<Keg
				whenKegClicked = {props.onKegSelection}
				name = {keg.name}
				brand = {keg.brand}
				price = {keg.price}
				ABV = {keg.ABV}
				pints = {keg.pints}
				id = {keg.id}
				key = {keg.id} />
				)}
		</>
	)
}

KegList.propTypes = {
  kegList: PropTypes.array,
	onKegSelection: PropTypes.func
};

export default KegList;