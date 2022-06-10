import React from 'react';
import Contact from '../Home/Contact';
import Footer from '../Home/Footer';
import ContactBanner from './ContactBanner';

const Contacts = () => {
    return (
        <div>
            <ContactBanner />
            <Contact />
            <Footer />
        </div>
    );
};

export default Contacts;