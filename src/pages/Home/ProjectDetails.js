import React from 'react';

const ProjectDetails = ({ project, iD }) => {
    const { id, name, Client, link, server, Details, images, feature } = project;

    const handleReload = () => {
        window.location.reload(false);
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <label htmlFor="my-modal-5" onClick={handleReload} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='mt-5'>
                        <div className='bg-secondary p-6 mb-6 flex justify-between items-center'>
                            <div>
                                <h2 className="text-5xl font-bold text-primary"> {name} </h2>
                                <p className='text-white mt-5'>{Details}</p>
                            </div>
                            <div className='space-x-5'>
                                <a href={link}><button className="badge badge-primary">Live Demo</button></a>
                                <a href={Client}><button className="badge badge-primary">Client Site Code</button></a>
                                {
                                    server &&
                                    <a href={server}><button className="badge badge-primary">Server Code</button></a>
                                }
                            </div>
                        </div>
                        <div className='m-5'>
                            <h2 className='text-5xl font-bold text-secondary mb-5'>Main Feature</h2>
                            <ul>
                                {
                                    feature.map(f => <li className='list-disc'>{f}</li>)
                                }
                            </ul>
                        </div>
                        <div>
                            <img src={images[0]} alt="" />
                            <img src={images[1]} alt="" />
                            <img src={images[2]} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProjectDetails;