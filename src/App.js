import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/About/About";
import Users from "./pages/Users/Users";

function App() {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <Switch>
          <Route exact path="/">
            <Users />
          </Route>
          <Route exact path="/about">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
