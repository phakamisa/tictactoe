import React from "react";
import "./Game.css";
import ErrorBoundary from "./ErrorBoundary";

const ThemeContext = React.createContext("dark");
const contextType = ThemeContext;
const Square = props => {
  return (
    <ErrorBoundary>
      <button className="square" onClick={props.onClick} theme={contextType}>
        {props.value}
      </button>
    </ErrorBoundary>
  );
};

export default Square;
/*
class Square extends Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;
*/
