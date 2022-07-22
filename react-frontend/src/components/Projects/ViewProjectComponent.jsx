import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProjectsService from '../../services/ProjectsService';

const ViewProjectComponent = () => {
    let navigate = useNavigate();
    let { id } = useParams();

    const [projects, setProjects] = useState([]);

    function cancel() {
        navigate('/projects');
    }

    useEffect(() => {
        (async () => {
            try {
                await ProjectsService.getProjectById(id).then(res => { setProjects(res.data) });
            } catch (error) {
                console.log(error);
            }
        })();
    }, [id]);

    return (
            <div>
                <div className='card col-md-6 offset-md-3'>
                    <h3 className='text-center'> View Project </h3>
                    <div className='card-body'>
                        <div className='row'>
                            <label> Project Name: </label>
                            <div> { projects.projectName } </div>
                        </div>
                        <div className='row'>
                            <label> Date: </label>
                            <div> { projects.date } </div>
                        </div>
                        <div className='row'>
                            <label> Description: </label>
                            <div> { projects.description } </div>
                        </div>
                        <div className='row'>
                            <label> Link: </label>
                            <div> { projects.link } </div>
                        </div>
                        <button className="btn btn-danger" type="button" onClick={cancel} style={{marginLeft: "10px"}}>Cancel</button>
                    </div>
                </div>
            </div>
        );
}

export default ViewProjectComponent;