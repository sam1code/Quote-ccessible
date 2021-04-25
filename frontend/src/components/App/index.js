import Account from "../Account";
import Explore from "../Explore";
import { Route, Switch } from "react-router-dom";
import {createStore, action, StoreProvider} from 'easy-peasy';

function App() {
  const store = createStore({
    qutoes: [],
    addQuote: action((state, payload) => {
      state.quotes.push(payload);
    }),
    isLoggedIn: false,
    handleIsLoggedIn: action((state, payload) => {
      state.isLoggedIn = payload
    })
  });
  return (
      <StoreProvider store={store}>
      <div className="App">
        <Switch>
          <Route exact path="/accounts" component={Account} />
          <Route exact path="/" component={Explore} />
        </Switch>
      </div>
    </StoreProvider>
  );
}

export default App;
