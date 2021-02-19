import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';
import EditItemForm from './EditItemForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as a from '../actions';

class ItemControl extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedItem: null,
			editing: false,
			filterType: "KEG"
		};
	}

	handleAddingNewItemToList = (newItem) => {
		const { dispatch } = this.props;
		const action = a.addItem(newItem)
		dispatch (action);
		const action2 = a.toggleForm();
		dispatch(action2);
	}

	handleChangingSelectedItem = (id) => {
		const selectedItem = this.props.masterItemList[id];
		this.setState({
			selectedItem: selectedItem
		});
	}

	handleDeletingItem = (id) => {
		const { dispatch } = this.props;
		const action = a.deleteItem(id);
		dispatch(action);
		this.setState({selectedItem: null});
	}

	handleEditClick = () => {
		this.setState({
			editing: true
		});
	}

	handleEditingItemInList = (itemToEdit) => {
		const { dispatch } = this.props;
		const action = a.addItem(itemToEdit);
		dispatch(action);
		this.setState({
			editing: false,
			selectedItem: null
		});
	}

	handleFilterChange = (type) => {
		this.setState({
			filterType: type
		})
	}

	handlePurchasingItemAmountInList = () => {
		const selectedItem = this.state.selectedItem;
		if (selectedItem.amount > 11) {
			const newQuantity = Object.assign({}, selectedItem, {amount: selectedItem.amount - 1});
			this.handleEditingItemInList(newQuantity);
			this.setState({
				selectedItem: newQuantity
			});
		} else if (selectedItem.amount > 0 && selectedItem.amount <= 11) {
			const newQuantity = Object.assign({}, selectedItem, {amount: selectedItem.amount - 1}, {stock: selectedItem.stock = "Almost Empty!"});
			this.handleEditingItemInList(newQuantity);
			this.setState({
				selectedItem: newQuantity
			});
		} else {
			const newQuantity = Object.assign({}, selectedItem, {stock: selectedItem.stock = "Out Of Stock!"});
			this.handleEditingItemInList(newQuantity);
			this.setState({
				selectedItem: newQuantity
			});
		}
	}

	handleClick = () => {
		if (this.state.selectedItem != null) {
			this.setState({
				selectedItem: null,
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
				<EditItemForm
					item = {this.state.selectedItem}
					onEditItem = {this.handleEditingItemInList}/>
					buttonText = "Item List";
		} else if (this.state.selectedItem != null) {
			currentlyVisibleState =
				<ItemDetail
					item = {this.state.selectedItem}
					onClickingDelete = {this.handleDeletingItem}
					onClickingEdit = {this.handleEditClick}
					onClickingPurchase = {this.handlePurchasingItemAmountInList}
					/>
					buttonText = "Item List";
		} else if (this.props.formVisibleOnPage) {
			currentlyVisibleState =
				<NewItemForm
					onNewItemCreation = {this.handleAddingNewItemToList}
					onEditItem = {this.handleEditingItemInList}
					/>
					buttonText = "Item List";
		} else {
			currentlyVisibleState = 
				<ItemList
					itemList = {this.props.masterItemList}
					onItemSelection = {this.handleChangingSelectedItem}
					filterVar={this.state.filterType}
					changeFilterType={this.handleFilterChange}
					/>
					buttonText = "Create New Item";
		}
		return (
			<>
			{currentlyVisibleState}
			<button className='btn btn-info' onClick = {this.handleClick}>{buttonText}</button>
			</>
		)
	}
}

ItemControl.propTypes = {
	masterItemList: PropTypes.object,
	formVisibleOnPage: PropTypes.bool
}

const mapStateToProps = state => {
	return {
		masterItemList: state.masterItemList,
		formVisibleOnPage: state.formVisibleOnPage
	}
}

ItemControl = connect(mapStateToProps)(ItemControl);

export default ItemControl;