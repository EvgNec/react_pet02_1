import { Component } from 'react'
import Header from './Header/Header'
import Counter from './Counter/Counter'
import ToDoList from './ToDoList/ToDoList'
import Modal from './Modal/Modal'
// import Counter2 from './Counter2/Counter2'

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
				<Header showModal={this.showModal} />
				<Counter/>
				{/* <Counter2/> */}
				<ToDoList />
				{this.state.isShowModal && (
					<Modal closeModal={this.closeModal}>Some</Modal>
				)}
			</div>
		)
	}
}

export default App;