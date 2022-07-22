import React, {useState, useEffect} from 'react';
import ProjectsService from '../../services/ProjectsService';
import { useNavigate } from 'react-router-dom';

const ListProjectsComponent = () => {
    let navigate = useNavigate();
    
    const [projectsList, setProjectsList] = useState([]);

    function addProject() {
        navigate('/add-project/_add');
    };

    function editProject(id) {
        navigate(`/add-project/${id}`);
    }

    function deleteProject(id) {
        ProjectsService.deleteProject(id).then( res => {
            setProjectsList(projectsList.filter(project => project.id !== id));
        });
    }

    function viewProject(id) {
        navigate(`/view-project/${id}`);
    }

    useEffect(() => {
        (async () => {
            try {
                await ProjectsService.getAllProjects().then(res => { setProjectsList(res.data) });
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <div>
            <h2 className='text-center'>Projects</h2>
            <div className = "row">
                <button className="btn btn-primary" onClick={addProject}> Add Project </button>
            </div>
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th> Project Name </th>
                            <th> Date </th>
                            <th> Description </th>
                            <th> Link </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            projectsList.map(
                                project =>
                                <tr key={project.id}>
                                    <td> {project.projectName} </td>
                                    <td> {project.date} </td>
                                    <td> {project.description} </td>
                                    <td> {project.link} </td>
                                    <td>
                                        <button onClick = {() => editProject(project.id)} className = "btn btn-info"> Update </button>
                                        <button style={{marginLeft: "10px"}} onClick = {() => deleteProject(project.id)} className = "btn btn-danger"> Delete </button>
                                        <button style={{marginLeft: "10px"}} onClick = {() => viewProject(project.id)} className = "btn btn-info"> View </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
  }

export default ListProjectsComponent