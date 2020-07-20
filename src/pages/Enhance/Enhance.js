import React from 'react';
import TopBar from '../../Components/TopBar/TopBar';
import ImageUploader from '../../Containers/ImageUploader/ImageUploader';
import ContactUs from '../../Components/ContactUs/ContactUs';

const Enhance = () => {
    return (
        <>
            <TopBar />
            <ImageUploader />
            <ContactUs color='light'/>
        </>
    )
}


export default Enhance;