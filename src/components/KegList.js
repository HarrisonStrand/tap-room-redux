import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {

	const { keg, onClickingPurchase } = props;

	return (
		<>
			{props.kegList.map((keg) => 
			<Keg
				name = {keg.name}
				brand = {keg.brand}
				price = {keg.price}
				ABV = {keg.ABV}
				pints = {keg.pints}
				whenKegClicked = {props.onKegSelection}
				id = {keg.id}
				key = {keg.id} />
				)}
				<button onClick={()=> onClickingPurchase() }>Purchase</button>
		</>
	)
}

KegList.propTypes = {
	keg: PropTypes.object,
  KegList: PropTypes.array,
	onKegSelection: PropTypes.func,
	onClickingPurchase: PropTypes.func
};

export default KegList;