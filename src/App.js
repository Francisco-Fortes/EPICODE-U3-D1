import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./Components/ButtonComponent";
import ImageComponent from "./Components/ImageComponent";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageComponent
          landscapeUrl="https://i.imgur.com/VXLAe3g.jpeg"
          landscapeName="Los-Gigantes-Picture"
        />
        <div>
          <ButtonComponent content="This should show on the page" />
          <ButtonComponent content="This should be different than the one above" />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
