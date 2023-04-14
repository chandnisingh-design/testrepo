import './App.css';
import "./Components/WebComponent1";
import "./Components/Page2";

function App() {
  return (
    <div className="App">
     <web-greeting name = "Welcome"></web-greeting>
     <hello-webcomponent name="Chandni Si"></hello-webcomponent>
    </div>
  );
}

export default App;
