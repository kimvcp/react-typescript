import React from 'react';

interface ButtonProps {
  text: String;
  step: number;
}

const Button: React.FunctionComponent<ButtonProps> = props => {
  const [counter, setCounter] = React.useState<number>(0);

  const handleClick = () => {
    setCounter(counter + props.step);
  };
  return (
    <div className='App'>
      <button onClick={handleClick}>{props.text}</button>
      <span>{counter}</span>
    </div>
  );
};

export default Button;
