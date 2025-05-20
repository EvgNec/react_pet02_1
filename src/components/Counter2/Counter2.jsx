import { Component } from 'react';
import css from './Counter2.module.css';

class Counter2 extends Component {
  state = {
    value: 0,
  };
  handleClickIncrement = (e) => {
    this.setState((prevState)=>( {value: prevState.value + 1}))
    }
    handleClickDecrement = (e) => {
        console.log(this.state.value);
        this.setState((prevState)=>{
          return {value: prevState.value - 1}
        }) } 
  increment = (e)=>{
    this.setState((prevState)=>( {value: prevState.value + 1}))
  }
  decrement = ()=>{
    this.setState((pS) =>(
        {value: pS.value - 1}
    ))
  }

  render() {

    return (
    <div className={css.body}>
  <div className={css.counterBox}>
    <h1>Counter</h1>
    <div>{this.state.value}</div>
    <div className={css.buttons}>
      <button onClick={this.increment}>+</button>
      <button onClick={this.decrement}>−</button>
    </div>
  </div>
  </div>
);

  }
}

export default Counter2;
