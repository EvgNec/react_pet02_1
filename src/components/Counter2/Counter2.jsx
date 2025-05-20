import { Component } from 'react';

class Counter2 extends Component {
  state = {
    value: 0,
  };

  render() {

    return (
      <div class="counter-box">
        <h1>Counter</h1>
        <div id="value">0</div>
        <div class="buttons">
          <button onclick="increment()">+</button>
          <button onclick="decrement()">−</button>
        </div>
      </div>
    );
  }
}
