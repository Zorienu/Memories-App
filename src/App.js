import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import { useDispatch } from "react-redux";

const App = () => {
  console.log("rendering App...");

  const dispatch = useDispatch();
  dispatch({ type: "AUTH", data: JSON.parse(localStorage.getItem("profile")) });

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

// Container: makes sure to center everything
// Typography: nice looking font to h1, p, etc
// Grow: provides some simple animation

export default App;
