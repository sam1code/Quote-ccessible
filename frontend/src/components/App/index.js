import Account from "../Account";
import Explore from "../Explore";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/accounts" component={Account} />
        <Route exact path="/" component={Explore} />
      </Switch>
    </div>
  );
}

export default App;
