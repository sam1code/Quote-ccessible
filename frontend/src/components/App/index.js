import Account from "../Account";
import Explore from "../Explore";
import { Route, Switch } from "react-router-dom";
import { createStore, action, StoreProvider, persist } from "easy-peasy";
import EditQuote from "../EditQuote";

function App() {
  const store = createStore(
    persist({
      isLoggedIn: false,
      handleIsLoggedIn: action((state, payload) => {
        state.isLoggedIn = payload;
      }),
    })
  );
  return (
    <StoreProvider store={store}>
      <div className="App">
        <Switch>
          <Route exact path="/accounts" component={Account} />
          <Route exact path="/edit/:id" component={EditQuote} />
          <Route exact path="/" component={Explore} />
        </Switch>
      </div>
    </StoreProvider>
  );
}

export default App;
