import MyHome from "./Home";
import MyNavBar from "./Navbar";
import RGA_logo from "./img/main-logo2.png";
import Tw from "./img/uil-telegram-logo.png";
import Tb from "./img/uil-tumblr-square-logo.png";
import Li from "./img/uil-linkedin-logo.png";
import Git from "./img/uil-github-logo.png";
import Bk from "./img/uil-book-alt-logo.png";
import Md from "./img/uil-medium-m-logo.png";
import MyOverView from "./Overview";
import MyTokenomic from "./Tokenomic";
import MyAllocation from "./Allocation";
import MyRoadMap from "./Roadmap";
import MyFindUs from "./Findus";
import DT from "./img/brand1.png";
import DS from "./img/brand2.png";
import DV from "./img/brand3.png";
import CG from "./img/brand4.png";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          < MyNavBar RGA_logo = {RGA_logo}/>
          <div className="AllPage">
            <Switch>
              <Route exact path="/">
                < MyHome RGA_logo = {RGA_logo} Tw = {Tw} Tb = {Tb} Li = {Li} Git = {Git} Bk = {Bk} Md = {Md}/>
              </Route>
              <Route exact path="/Overview">
                < MyOverView/>
              </Route>
              <Route exact path="/Tokenomic">
                < MyTokenomic/>
              </Route>
              <Route exact path="/Allocation">
                < MyAllocation/>
              </Route>
              <Route exact path="/Roadmap">
                < MyRoadMap/>
              </Route>
              <Route exact path="/Findus">
                < MyFindUs RGA_logo = {RGA_logo} DT = {DT} DS = {DS} DV = {DV}  CG = {CG} Tw = {Tw} Tb = {Tb} Li = {Li} Git = {Git} Bk = {Bk} Md = {Md} />
              </Route>
            </Switch>
          </div>
    </div>
    </Router>
  );
}

export default App;
