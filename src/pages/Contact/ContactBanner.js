import React from 'react';
import contact from './../../image/contact.jpg'

const ContactBanner = () => {
    return (
        <div className='h-56 w-full bg-primary' style={{
            backgroundImage: `url(${contact})`, backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className='h-full bg-secondary bg-opacity-50'>
                <div className='h-full flex flex-col justify-center items-center'>
                    <p className='text-5xl text-white font-bold uppercase'>Contact us</p>
                    <div className="text-sm breadcrumbs">
                        <ul className='text-white'>
                            <li><a>Home</a></li>
                            <li><a>Contacts</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactBanner;