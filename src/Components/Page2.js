import Hello from "./Page1";
import React from 'react';
import ReactDOM from 'react-dom';
class HelloWebComponent extends HTMLElement {
    connectedCallback() {
      const name = this.getAttribute('name');
      const mountPoint = document.createElement('div');
      this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
  
      ReactDOM.render(<Hello name={name} />, mountPoint);
    }
  }
  
  customElements.define('hello-webcomponent', HelloWebComponent);
