import React from "react"
import * as ReactDOM from "react-dom"
class Hello extends React.Component {
    render() {
      return <div>Hello C, {this.props.name}!</div>;
    }
  }
  export default Hello;
  

// function Hello(props) {
//     return ( 
//         <div>Hello, {this.props.name}!</div>
//     );
// }
  
// export default Hello;
