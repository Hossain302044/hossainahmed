import React from 'react';
import { Link } from 'react-router-dom';
import hossain from '../../image/hossain.png'

const Banner = () => {
    return (
        <div>
            <div className="w-full">
                <div id="item1" className="hero min-h-[700px] bg-[#202020]" >
                    <div className="hero-content justify-between w-full text-neutral-content">
                        <div className='md:flex w-full'>
                            <div className='md:w-3/6 flex flex-col justify-center'>
                                <h1 className="mb-5 mt-5 md:mt-0 text-[18px] text-white ">I’m Hossain Ahmed.</h1>
                                <p className="mb-7 text-5xl font-bold text-base-100">Web Designer & Developer</p>
                                <div className='flex gap-5'>
                                    <a href="../../image/Mohammad Hossain Ahmed.pdf" download='Mohammad Hossain Ahmed.pdf'>
                                        <button className="btn btn-primary bg-[#00c0ff] border-[#00c0ff] hover:bg-cyan-600 hover:border-cyan-600">Download CV</button>
                                    </a>
                                    <div className='flex justify-center items-center border-b-2 border-[#00c0ff]'>
                                        <Link to='contact'><button className=" text-[#00c0ff]">Contact Me</button></Link>
                                    </div>
                                </div>
                            </div>
                            <div className='md:w-3/6'>
                                <div className='flex justify-end'>
                                    <img src={hossain} alt="hossain" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;