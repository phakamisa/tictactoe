import React from "react";
import "../App.css";
import { ChatWidget } from "./chat-widget";
import Flexbox from "./Flexbox";
import ImageGallery from "./ImageGallery";

function Footer() {
  return (
    <div className="App">
      <footer className="App-nav-footer"> Footer section</footer>
      <ChatWidget />
      <Flexbox />
      <ImageGallery />
    </div>
  );
}

export default Footer;
