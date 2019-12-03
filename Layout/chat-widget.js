import React, { Component } from "react";
import ReactDOM from "react-dom";

const chatWidgetRoot = document.getElementById("chat-widget-root");

export class ChatWidget extends Component {
  state = { open: false };

  handleOpenButtonClick = () => this.setState({ open: true });

  handleCloseButtonClick = () => this.setState({ open: false });

  render() {
    return ReactDOM.createPortal(this.renderWidget(), chatWidgetRoot);
  }
  renderWidget() {
    return (
      <>
        {!this.state.open && (
          <button
            className="chat__open-button"
            onClick={this.handleOpenButtonClick}
          >
            Need help?
          </button>
        )}
        {this.state.open && (
          <div className="chat__window">
            <header className="chat__header">
              <h3 className="chat__title">Live support</h3>
              <button
                className="chat__close-button"
                onClick={this.handleCloseButtonClick}
              >
                <img src="/arrow-down-icon.svg" alt="" />
              </button>
            </header>
            <div className="chat__messages" />
            <textarea
              className="chat__message-input"
              placeholder="Type your message here"
            />
          </div>
        )}
      </>
    );
  }
}
