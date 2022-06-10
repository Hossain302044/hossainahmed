import React, { useEffect, useState } from 'react';
import PortfolioDiv from './PortfolioDiv';

const Portfolio = () => {
    const [projects, setProjects] = useState('');
    useEffect(() => {
        fetch('project.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);
    return (
        <div className='max-w-screen-xl mx-auto my-24'>
            <div className='text-center py-5'>
                <h2 className=' text-4xl font-bold uppercase text-primary'>AWESOME WORKS</h2>
                <progress className="progress w-56 progress-primary"></progress>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    projects
                    &&
                    projects.map(project => <PortfolioDiv
                        key={project.id}
                        project={project}
                    ></PortfolioDiv>)
                }



                {/* <div className='lg:col-span-2 p-5 border border-2'>
                    <div>
                        <a href="https://manufacturer-website-cli-62442.firebaseapp.com/" target="_blank" >
                            <img src={toolmaster} className='w-full hover:scale-105 transition duration-700 ease-in-out' alt="" />
                        </a>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='border-2 border-l-0 border p-5'>
                        <a href="https://warehouse-management-side.web.app/" target="_blank" >
                            <img src={laptop} className='w-full hover:scale-105 transition duration-700 ease-in-out' alt="" />
                        </a>
                    </div>
                    <div className='border-2 border-l-0 border-t-0 border p-5'>
                        <a href="https://ayra-fitness.web.app/" target="_blank" >
                            <img src={ayra} className='w-full hover:scale-105 transition duration-700 ease-in-out' alt="" />
                        </a>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Portfolio;