import { Component } from 'react'
import Header from './Header/Header'
import Counter from './Counter/Counter'
import ToDoList from './ToDoList/ToDoList'
import Modal from './Modal/Modal'
import Section from './Feedback/Section/Section'
import Statistics from './Feedback/Statistics/Statistics'
import Shop from './Shop/shop'
import Shops from './Test/Shops'

class App extends Component {
	state = {
		isShowModal: false,
	}

	showModal = () => {
		this.setState({ isShowModal: true })
	}

	closeModal = () => {
		this.setState({ isShowModal: false })
	}

	render() {
		return (
			<div className='container'>


					<Statistics/>
<Shop/>
			<Header showModal={this.showModal} /> 
			{/* <Counter/> */}
		{this.state.isShowModal && (
				<Modal closeModal={this.closeModal}><ToDoList /></Modal>
			)}
<Shops/>
			</div>
		)
	}
}

export default App;


