import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ children }) => {
    const menuItem = <>
        <li><NavLink to='/' className='rounded-lg'>Home</NavLink></li>
        <li><NavLink to='/about' className='rounded-lg'>About</NavLink></li>
        <li><NavLink to='/blog' className='rounded-lg'>Blog</NavLink></li>
        <li><NavLink to='/contacts' className='rounded-lg'>contact</NavLink></li>
    </>
    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div className="w-full bg-[#202020]">
                        <div className='max-w-screen-xl mx-auto navbar'>
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <div className="flex-1 px-2 mx-2 text-white font-bold text-3xl uppercase">M.Hossain</div>
                            <div className="flex-none hidden lg:block">
                                <ul className="menu menu-horizontal text-white space-x-3">
                                    {
                                        menuItem
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Page content here --> */}
                    {
                        children
                    }
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">

                        {
                            menuItem
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Header;