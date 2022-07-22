import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProjectsService from '../../services/ProjectsService';

const CreateOrUpdateProjectsComponent = () => {
    let navigate = useNavigate();
    let { id } = useParams();
    
    const [projectName, setProjectName] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    
    const handleProjectName = event => {
        setProjectName(event.target.value)
    }

    const handleDate = event => {
        setDate(event.target.value);
    }

    const handleDescription = event => {
        setDescription(event.target.value)
    }

    const handleLink = event => {
        setLink(event.target.value)
    }

    function createOrUpdateProjects() {
        let project = {projectName: projectName, date: date, description: description, link: link};
        console.log('Project => ' + JSON.stringify(project));

        if (id === "_add") {
            ProjectsService.addProject(project).then(res => {
                navigate('/projects');
            });
        } else {
            ProjectsService.updateProject(project, id).then(res => {
                navigate('/projects');
            });
        }
    }

    function cancel() {
        navigate('/projects');
    }

    useEffect(() => {
        if (id === "_add") {
            return
        } else {
            (async () => {
                try {
                    await ProjectsService.getProjectById(id).then(res => { 
                        let project = res.data;
                        setProjectName(project.projectName);
                        setDate(project.date);
                        setDescription(project.description);
                        setLink(project.link);
                    });
                } catch (error) {
                    console.log(error);
                }
            })();
        }
    }, [id]);

    function getTitle() {
        if (id === "_add") {
            return <h3 className='text-center'>Add Project</h3>
        } else {
            return <h3 className='text-center'>Update Project</h3>
        }
    }

    return (
        <div>
            <br></br>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            { getTitle() }
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label> Project Name: </label>
                                        <input placeholder='Project Name' name='projectName' className='form-control'
                                            value={projectName} onChange={handleProjectName}/>
                                    </div>
                                    <div className='form-group'>
                                        <label> Date: </label>
                                        <input placeholder='Date' name='date' className='form-control'
                                            value={date} onChange={handleDate}/>
                                    </div>
                                    <div className='form-group'>
                                        <label> Description: </label>
                                        <input placeholder='Description' name='description' className='form-control'
                                            value={description} onChange={handleDescription}/>
                                    </div>
                                    <div className='form-group'>
                                        <label> Link: </label>
                                        <input placeholder='Link' name='link' className='form-control'
                                            value={link} onChange={handleLink}/>
                                    </div>
               
                                    <button className="btn btn-success" type="button" onClick={createOrUpdateProjects}>Save</button>
                                    <button className="btn btn-danger" type="button" onClick={cancel} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default CreateOrUpdateProjectsComponent;