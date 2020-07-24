import React, { useState, useEffect } from 'react';
import Home from './pages/Home/Home';
import Enhance from './pages/Enhance/Enhance';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [showTopButton, setTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        setTopButton(true);
      }
      else{
        setTopButton(false);
      }
    });
  })

  return (
    <Router>
      <Switch >
        <Route path="/image-enhancer/enhance">
          <Enhance />
        </Route>
        <Route path="/image-enhancer">
          <Home showTopButton={showTopButton}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
