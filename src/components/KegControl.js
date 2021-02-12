import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';

class KegControl extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			formVisibleOnPage: false,
			masterKegList: [],
			selectedKeg: null,
			editing: false
		};
	}

	handleAddingNewKegToList = (newKeg) => {
		const newMasterKegList = this.state.masterKegList
			.concat(newKeg);
		this.setState({ 
			masterKegList: newMasterKegList, 
			formVisibleOnPage: false });
	}

	handleChangingSelectedKeg = (id) => {
		const selectedKeg = this.state.masterKegList
			.filter(keg => keg.id === id)[0];
		this.setState({
			selectedKeg: selectedKeg
		});
	}

	handleDeletingKeg = (id) => {
		const newMasterKegList = this.state.masterKegList
			.filter(keg => keg.id !== id);
		this.setState({
			masterKegList: newMasterKegList,
			selectedKeg: null
		});
	}

	handleEditClick = () => {
		this.setState({
			editing: true
		});
	}

	handleEditingKegInList = (kegToEdit) => {
		const editedMasterKegList = this.state.masterKegList
			.filter(keg => keg.id !== this.state.selectedKeg.id)
			.concat(kegToEdit);
		this.setState({
			masterKegList: editedMasterKegList,
			editing: false,
			selectedKeg: null
		});
	}

	handlePurchasingKegPintInList = () => {
		const selectedKeg = this.state.selectedKeg;
		let outOfStock = "";
		if (selectedKeg.pints > 0) {
			const newQuantity = Object.assign({}, selectedKeg, {pints: selectedKeg.pints - 1});
			const newKegList = this.state.masterKegList
				.filter(keg => keg.id !== this.state.selectedKeg.id)
				.concat(newQuantity);
				this.setState({
					masterKegList: newKegList,
					selectedKeg: newQuantity
				});
		} else {
			const newQuantity = Object.assign({}, selectedKeg, {pints: selectedKeg.pints});
			outOfStock = "Out Of Stock!"
			const newKegList = this.state.masterKegList
				.filter(keg => keg.id !== this.state.selectedKeg.id)
				.concat(newQuantity);
				this.setState({
					masterKegList: newKegList,
					selectedKeg: newQuantity
				});
		}
	}

	handleClick = () => {
		if (this.state.selectedKeg != null) {
			this.setState({
				formVisibleOnPage: false,
				selectedKeg: null,
				editing: false
			});
		} else {
			this.setState(prevState => ({
				formVisibleOnPage: !prevState.formVisibleOnPage
			}));
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
		} else if (this.state.formVisibleOnPage) {
			currentlyVisibleState =
				<NewKegForm
					onNewKegCreation = {this.handleAddingNewKegToList}
					onEditKeg = {this.handleEditingKegInList}
					/>
					buttonText = "Keg List";
		} else {
			currentlyVisibleState = 
				<KegList
					kegList = {this.state.masterKegList}
					onKegSelection = {this.handleChangingSelectedKeg}
					/>
					buttonText = "Create New Keg";
		}
		return (
			<>
			{currentlyVisibleState}
			<button onClick = {this.handleClick}>{buttonText}</button>
			</>
		)
	}
}

export default KegControl;