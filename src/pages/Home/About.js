import React from 'react';
import hossainme from './../../image/hossain-me.png'
import web from './../../image/web-developer.png'

const About = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-24'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-20  mx-2 md:mx-0'>
                <div className='w-full'>
                    <div className='w-full  justify-end flex relative'>
                        <img src={hossainme} className='w-80 rounded-md' alt="" />

                        <div className='w-full  justify-end flex absolute -bottom-24 right-40'>
                            <img src={web} className='w-80 h-80 rounded-md shadow-md' alt="" />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-end w-full'>
                    <div className='space-y-7 '>
                        <h2 className='font-bold mt-20 md:mt-0 text-[#00c0ff] text-2xl'>About us</h2>
                        <h3 className='text-4xl text-[#202020] font-bold'>A Passionate Development Who Loves the Codes.</h3>
                        <div className='border border-2 rounded-[25px] p-5 lg:flex'>
                            <div className='space-y-5 border-0 lg:border-r-2 pr-5'>
                                <div>
                                    <p className=' font-bold text-black'>Name</p>
                                    <p className='text-base-500'>M. Hossain Ahmed</p>
                                </div>
                                <div>
                                    <p className=' font-bold text-black'>Email</p>
                                    <p className='text-base-500'>hossainahmed3020@gmail.com</p>
                                </div>
                                <div>
                                    <p className=' font-bold text-black'>Phone</p>
                                    <p className='text-base-500'>+880 1724-591 912</p>
                                </div>
                            </div>
                            <div className='ml-0 lg:ml-5 mt-5 lg:mt-0 space-y-5'>
                                <div>
                                    <p className=' font-bold text-black'>Address</p>
                                    <p className='text-base-500'>Mirpur-12, Dhaka</p>
                                </div>
                                <div>
                                    <p className=' font-bold text-black'>DOB</p>
                                    <p className='text-base-500'>20 Feb 2001</p>
                                </div>
                                <div>
                                    <p className=' font-bold text-black'>Phone</p>
                                    <p className='text-base-500'>+880 1724-591 912</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center lg:justify-start'>
                            <button className="btn btn-primary bg-[#00c0ff] border-[#00c0ff] hover:bg-cyan-600 hover:border-cyan-600">Download CV</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;