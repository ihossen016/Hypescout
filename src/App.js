import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Campaign from "./pages/Campaign";
import Hypesocial from "./pages/Hypesocial";
import Insights from "./pages/Insights";
import { useContext, useEffect } from "react";
import Footer from "./components/Footer";
import { AppContext } from "./context/Context";

function App() {
  const { fetchData } = useContext(AppContext);

  useEffect(() => {
    // Call fetchData function
    fetchData();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/campaign">
            <Campaign />
          </Route>
          <Route path="/hypesocial">
            <Hypesocial />
          </Route>
          <Route path="/insights">
            <Insights />
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
