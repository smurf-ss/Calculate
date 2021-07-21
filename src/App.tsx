import { BrowserRouter, Switch, Route } from "react-router-dom";

import Calculate from "./pages/Calculate";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Calculate />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
