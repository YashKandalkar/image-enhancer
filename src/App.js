import React, { useState } from 'react';
import styles from './App.module.css';
import ImageUploader from './Containers/ImageUploader/ImageUploader';
import TopBar from './Components/TopBar/TopBar';
import Info from './Components/Info/Info';
import Working from './Components/Working/Working';
import ContactUs from './Components/ContactUs/ContactUs';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import SlideShow from './Containers/SlideShow/SlideShow';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  const [showTopButton, setTopButton] = useState(false);
  document.body.onscroll = () => {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
      setTopButton(true);
    }
    else{
      setTopButton(false);
    }
  }

  return (
    <Router>
      <TopBar />
      <Switch >
        <Route path="/image-enhancer/enhance">
          <ImageUploader />
          <ContactUs color='light'/>
        </Route>
        <Route path="/image-enhancer">
          <div className={styles.App}>
            <SlideShow />
            <Info />
            <Working />
            <ScrollToTop show={showTopButton}/>
            <ContactUs color='dark'/>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
