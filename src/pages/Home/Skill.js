import React from 'react';

const Skill = () => {
    return (

        <div className='max-w-screen-xl mx-auto my-24'>
            <div className='text-center py-20'>
                <h2 className=' text-4xl font-bold uppercase text-primary'>Our Skills</h2>
                <progress className="progress w-56 progress-primary"></progress>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 lg:gap-20'>
                <div className='space-y-5'>
                    <div className='flex flex-col space-y-5'>
                        <div>
                            <div className='flex justify-between'>
                                <p className='font-bold text-black'>HTML5</p>
                                <p className='text-primary'>90%</p>
                            </div>
                            <progress className="progress progress-primary w-full shadow-lg shadow-primary" value="90" max="100"></progress>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-5'>
                        <div>
                            <div className='flex justify-between'>
                                <p className='font-bold text-black'>CSS3</p>
                                <p className='text-primary'>75%</p>
                            </div>
                            <progress className="progress progress-primary w-full  shadow-lg shadow-primary" value="75" max="100"></progress>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-5'>
                        <div>
                            <div className='flex justify-between'>
                                <p className='font-bold text-black uppercase'>bootstrap 5</p>
                                <p className='text-primary'>90%</p>
                            </div>
                            <progress className="progress progress-primary w-full  shadow-lg shadow-primary" value="90" max="100"></progress>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-5'>
                        <div>
                            <div className='flex justify-between'>
                                <p className='font-bold text-black'>JAVASCRIPT</p>
                                <p className='text-primary'>70%</p>
                            </div>
                            <progress className="progress progress-primary w-full  shadow-lg shadow-primary" value="70" max="100"></progress>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-5'>
                        <div>
                            <div className='flex justify-between'>
                                <p className='font-bold text-black uppercase'>tailwind CSS</p>
                                <p className='text-primary'>80%</p>
                            </div>
                            <progress className="progress progress-primary w-full  shadow-lg shadow-primary" value="80" max="100"></progress>
                        </div>
                    </div>
                </div>
                <div className='space-y-5'>
                    <div className='flex flex-col space-y-5'>
                        <div>
                            <div className='flex justify-between'>
                                <p className='font-bold text-black'>React</p>
                                <p className='text-primary'>60%</p>
                            </div>
                            <progress className="progress progress-primary w-full  shadow-lg shadow-primary" value="60" max="100"></progress>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-5'>
                        <div>
                            <div className='flex justify-between'>
                                <p className='font-bold text-black'>Node js</p>
                                <p className='text-primary'>50%</p>
                            </div>
                            <progress className="progress progress-primary w-full  shadow-lg shadow-primary" value="50" max="100"></progress>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-5'>
                        <div>
                            <div className='flex justify-between'>
                                <p className='font-bold text-black uppercase'>Express JS</p>
                                <p className='text-primary'>60%</p>
                            </div>
                            <progress className="progress progress-primary w-full  shadow-lg shadow-primary" value="60" max="100"></progress>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-5'>
                        <div>
                            <div className='flex justify-between'>
                                <p className='font-bold text-black'>mongo Db</p>
                                <p className='text-primary'>70%</p>
                            </div>
                            <progress className="progress progress-primary w-full  shadow-lg shadow-primary" value="70" max="100"></progress>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-5'>
                        <div>
                            <div className='flex justify-between'>
                                <p className='font-bold text-black uppercase'>stripe js</p>
                                <p className='text-primary'>40%</p>
                            </div>
                            <progress className="progress progress-primary w-full  shadow-lg shadow-primary" value="40" max="100"></progress>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;