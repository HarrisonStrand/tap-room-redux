import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Keg from './Keg';
import { deleteKeg } from '../actions';

class KegControl extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedKeg: null,
			editing: false
		};
	}

	handleAddingNewKegToList = (newKeg) => {
		const { dispatch } = this.props;
		const { name, brand, price, ABV, pints, stock, id } = newItem;
		const action = {
			type: 'ADD_KEG',
			name: name,
			brand: brand,
			price: price,
			ABV: ABV,
			pints: pints,
			stock: stock,
			id: id
		}
		dispatch (action);
		const action2 = {
			type: 'TOGGLE_FORM'
		}
		dispatch(action2);
	}

	handleChangingSelectedKeg = (id) => {
		const selectedKeg = this.props.masterKegList[id];
		this.setState({
			selectedKeg: selectedKeg
		});
	}

	handleDeletingKeg = (id) => {
		const { dispatch } = this.props;
		const action = deleteKeg(id);
		dispatch(action);
		this.setState({selectedKeg: null});
	}

	handleEditClick = () => {
		this.setState({
			editing: true
		});
	}

	handleEditingKegInList = (kegToEdit) => {
		const { dispatch } = this.props;
		const { name, brand, price, ABV, pints, stock, id } = kegToEdit;
		const action = {
			type: 'ADD_KEG',
			name: name,
			brand: brand,
			price: price,
			ABV: ABV,
			pints: pints,
			stock: stock,
			id: id
		}
		dispatch(action);
		this.setState({
			editing: false,
			selectedKeg: null
		});
	}

	handlePurchasingKegPintInList = () => {
		const selectedKeg = this.state.selectedKeg;
		if (selectedKeg.pints > 11) {
			const newQuantity = Object.assign({}, selectedKeg, {pints: selectedKeg.pints - 1});
			this.handleEditingKegInList(newQuantity);
			this.setState({
				selectedKeg: newQuantity
			});
		} else if (selectedKeg.pints > 0 && selectedKeg.pints <= 11) {
			const newQuantity = Object.assign({}, selectedKeg, {pints: selectedKeg.pints - 1}, {stock: selectedKeg.stock = "Almost Empty!"});
			this.handleEditingKegInList(newQuantity);
			this.setState({
				selectedKeg: newQuantity
			});
		} else {
			const newQuantity = Object.assign({}, selectedKeg, {stock: selectedKeg.stock = "Out Of Stock!"});
			this.handleEditingKegInList(newQuantity);
			this.setState({
				selectedKeg: newQuantity
			});
		}
	}

	handleClick = () => {
		if (this.state.selectedKeg != null) {
			this.setState({
				selectedKeg: null,
				editing: false
			});
		} else {
			const { dispatch } = this.props;
			const action = {
				type: 'TOGGLE_FORM'
			}
			dispatch(action);
		}
	}

	render(){
		let currentlyVisibleState = null;
		let buttonText = null;
		if (this.state.editing) {
			currentlyVisibleState =
				<EditKegForm
					keg = {this.state.selectedKeg}
					onEditKeg = {this.handleEditingKegInList}/>
					buttonText = "Keg List";
		} else if (this.state.selectedKeg != null) {
			currentlyVisibleState =
				<KegDetail
					keg = {this.state.selectedKeg}
					onClickingDelete = {this.handleDeletingKeg}
					onClickingEdit = {this.handleEditClick}
					onClickingPurchase = {this.handlePurchasingKegPintInList}
					/>
					buttonText = "Keg List";
		} else if (this.props.formVisibleOnPage) {
			currentlyVisibleState =
				<NewKegForm
					onNewKegCreation = {this.handleAddingNewKegToList}
					onEditKeg = {this.handleEditingKegInList}
					/>
					buttonText = "Keg List";
		} else {
			currentlyVisibleState = 
				<KegList
					kegList = {this.props.masterKegList}
					onKegSelection = {this.handleChangingSelectedKeg}
					/>
					buttonText = "Create New Keg";
		}
		return (
			<>
			{currentlyVisibleState}
			<button className='btn btn-info' onClick = {this.handleClick}>{buttonText}</button>
			</>
		)
	}
}

KegControl.propTypes = {
	masterKegList: PropTypes.object,
	formVisibleOnPage: PropTypes.bool
}

const mapStateToProps = state => {
	return {
		masterKegList: state.masterKegList,
		formVisibleOnPage: state.formVisibleOnPage
	}
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;