import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-secondary text-base-content rounded">
                <div className="grid grid-flow-col gap-4 text-white text-1xl">

                    <a className="link link-hover text-[16px]">Home</a>
                    <a className="link link-hover text-[16px]">About us</a>
                    <a className="link link-hover text-[16px]">Contact</a>
                    <a className="link link-hover text-[16px]">Portfolio</a>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://www.facebook.com/hossainahmed.developer/' target='_blank'><FaFacebookF className='h-8 w-8 text-white hover:text-primary' /></a>
                        <a href='https://github.com/Hossain302044' target='_blank' ><FaGithub className='h-8 w-8 text-white hover:text-primary' /></a>
                        <a href='https://www.linkedin.com/in/mhossainahmed/' target='_blank' ><FaLinkedinIn className='h-8 w-8 text-white hover:text-primary' /></a>
                    </div>
                </div>
                <div className='text-white'>
                    <p className='text-[16px]'>Copyright © 2022 - All right reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;