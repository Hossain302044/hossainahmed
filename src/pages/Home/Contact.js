import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const handleSubmit = event => {
        event.preventDefault();
        emailjs.sendForm('service_39mq35r', 'template_ksz25uh', event.target, 'O9FJduJV2BBALrIwQ').then(res => {
            console.log(res);
            window.location.reload(false);
        }).catch(err => console.log(err));

    };

    return (
        <div id='contact' className='max-w-screen-xl mx-auto my-24'>
            <div className='mx-2 lg:mx-0'>
                <div className='text-center'>
                    <p className='text-black'>Write a message?</p>
                    <h2 className=' text-4xl font-bold uppercase text-primary'>Have Any Questions?</h2>
                    <progress className="progress w-56 progress-primary"></progress>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20'>
                    <div className='w-full space-y-5'>
                        <p className='text-primary uppercase'>contact us</p>
                        <h2 className='font-bold text-4xl text-secondary '>Here you can find out our main contact information?</h2>
                        <h3 className='text-[#202020] font-bold'>Mipur-12, Dhaka, Bangladesh</h3>
                        <p>support@mhossain.com, info@mhossain.com</p>
                        <p>+880 1724-591 912</p>
                    </div>
                    <div className='w-full '>
                        <form onSubmit={handleSubmit} className='space-y-7'>
                            <div className='lg:flex lg:gap-5 space-y-7 lg:space-y-0'>
                                <input
                                    type="Name"
                                    name='name'
                                    placeholder="Type here"
                                    className="input input-bordered w-full"
                                    required
                                />
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="Type here"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <textarea
                                className="textarea textarea-bordered w-full"
                                name='message' placeholder="message"
                            ></textarea>
                            <input className='btn btn-primary text-white' type="submit" value='Send Message' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;