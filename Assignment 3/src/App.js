import "./App.css";
import Nav from "./Components/Nav";
import {
  Business,
  Facebook,
  Location,
  Corporation,
  Denied,
  Survey,
  CorporationSignUp,
  ContractedCorporation,
  ContractLargeCorp,
  SmallCorpSignUp,
  FacebookWidget,
  EmailSignUp,
  Backend,
} from "./Components/YesNo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="">
        <Nav />
        <div style={{ margin: "20px", marginTop: "40px" }}>
          <Route path="/" exact component={Business} />
          <Route path="/Denied" component={Denied} />
          <Route path="/Survey" component={Survey} />
          <Route path="/Backend" component={Backend} />
          <Route path="/Facebook" component={Facebook} />
          <Route path="/Location" component={Location} />
          <Route path="/Corporation" component={Corporation} />
          <Route path="/EmailSignUp" component={EmailSignUp} />
          <Route path="/FacebookWidget" component={FacebookWidget} />
          <Route path="/SmallCorpSignUp" component={SmallCorpSignUp} />
          <Route path="/ContractLargeCorp" component={ContractLargeCorp} />
          <Route path="/CorporationSignUp" component={CorporationSignUp} />
          <Route
            path="/ContractedCorporation"
            component={ContractedCorporation}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
