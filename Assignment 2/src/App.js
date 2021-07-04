import "./App.css";
import Giphy from "./Components/Giphy";
import Reddit from "./Components/Reddit";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Reddit} />
        <Route path="/Giphy" exact component={Giphy} />
      </div>
    </Router>
  );
}

export default App;
