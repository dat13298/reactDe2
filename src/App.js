import Login from "./login";
import Header from "./header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Login />
      </header>
    </div>
  );
}

export default App;
