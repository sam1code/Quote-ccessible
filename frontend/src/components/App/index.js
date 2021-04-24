import Account from "../Account";
import Explore from "../Explore";
import { Redirect, Route, Switch } from "react-router-dom";
import { isAuthenticated } from "../auth";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/accounts">
          <Account />
        </Route>
        <Route exact path="/">
          <Explore />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
