import React, { Component } from 'react';

interface InputProps {
  text?: String;
  num?: number;
}

interface InputState {
  counter: number;
  step: number;
}

class input extends Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = {
      counter: 1,
      step: 1
    };
  }
  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({
          counter: event.target.value.length,
      })
  };
  render() {
    return (
      <div>
        <div>{this.props.text}</div>
        <input onChange={this.handleChange} type='text' />
        <div>counter: {this.state.counter}</div>
      </div>
    );
  }
}

export default input;
