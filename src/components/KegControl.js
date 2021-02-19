import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as a from './../actions';

class KegControl extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedKeg: null,
			editing: false,
			filterType: "KEG"
		};
	}

	handleAddingNewKegToList = (newKeg) => {
		const { dispatch } = this.props;
		const action = a.addKeg(newKeg)
		dispatch (action);
		const action2 = a.toggleForm();
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
		const action = a.deleteKeg(id);
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
		const action = a.addKeg(kegToEdit);
		dispatch(action);
		this.setState({
			editing: false,
			selectedKeg: null
		});
	}

	handleFilterChange = (type) => {
		this.setState({
			filterType: type
		})
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
			const action = a.toggleForm();
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
					filterVar={this.state.filterType}
					changeFilterType={this.handleFilterChange}
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