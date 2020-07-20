import React from 'react';
import TopBar from '../../Components/TopBar/TopBar';
import SlideShow from '../../Containers/SlideShow/SlideShow';
import Info from '../../Components/Info/Info';
import Working from '../../Components/Working/Working';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import ContactUs from '../../Components/ContactUs/ContactUs';


const Home = ({ showTopButton }) => {
    return (
        <>
            <TopBar />
            <SlideShow />
            <Info />
            <Working />
            <ScrollToTop show={showTopButton}/>
            <ContactUs color='dark'/>
        </>
    )
}


export default Home;