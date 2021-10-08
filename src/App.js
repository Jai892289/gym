import React from 'react';
import {BrowserRouter as Router ,Route , Switch , Redirect} from "react-router-dom"
import About from "./Component/About";
import Homes from "./Component/Homes";
import Navbar from "./Component/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Contact from "./Component/Contact";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import image from "./Image/offer.png"


const App = () => {
  return (
    <div>
    <Router>
    <Navbar />

      <Switch>
      <Route exact path="/" component={Homes}  />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to ="/" />
      </Switch>

      </Router>
    </div>
  )
}

export default App

