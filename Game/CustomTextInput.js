import React, { Component } from "react";
//const ThemeContext = React.createContext("light");
import { ThemeContext } from "./theme-context";

class CustomTextInput extends Component {
  constructor(props) {
    super(props);
    // Create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.state = { error: null };
    this.contextType = ThemeContext;
  }

  render() {
    //Test the Error Boundary
    /*throw new error("at CustomTextInput!");
    if (this.state.error === null) {
      return <h1>I crashed at CustomTextInput!</h1>;
    }*/
    // Use the `ref` callback to store a reference to the text input DOM
    // element in an instance field (for example, this.textInput).
    let theme = this.context;
    return (
      <input
        type="text"
        ref={this.textInput}
        theme={this.context}
        style={{ backgroundColor: theme.background }}
      />
    );
  }
}

export default CustomTextInput;
