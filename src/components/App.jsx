import React from "react";
import Header from "./Header";
import NavTop from "./NavTop";
import Produce from "./Produce";
import Schedule from "./Schedule";
import { Switch, Route } from 'react-router-dom';


function App(){
  return(
    <div>
      <NavTop/>
      <Header />
      <Switch>
        <Route exact path='/produce' component={Produce} />
        <Route exact path='/schedule' component={Schedule} />
      </Switch>
    </div>
  );
}

export default App;
