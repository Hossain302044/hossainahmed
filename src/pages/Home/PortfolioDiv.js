import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectDetails from './ProjectDetails';

const PortfolioDiv = ({ project }) => {
    const { id, name, Mern, tech, img, Details, images } = project;
    const [iD, setID] = useState(null);
    const navigate = useNavigate();

    const viewProjects = id => {
        setID(id);
    }
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    {
                        Mern && <div className="badge badge-primary text-white">{Mern}</div>
                    }
                </h2>
                <p>{Details}</p>
                <div className="card-actions">
                    {
                        tech.map((t, index) => <div
                            className="badge badge-primary text-black badge-outline"
                            key={index}
                        >{t}</div>)
                    }
                </div>
                <div className="card-actions mt-10">
                    <label
                        onClick={() => viewProjects(id)}
                        for="my-modal-5"
                        class="btn modal-button btn-primary">View Project
                    </label>
                </div>
                {
                    iD && <ProjectDetails
                        iD={iD}
                        project={project}
                    ></ProjectDetails>
                }
            </div>

        </div >
    );
};

export default PortfolioDiv;