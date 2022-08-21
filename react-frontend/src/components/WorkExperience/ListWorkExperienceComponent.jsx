import React, {useState, useEffect} from 'react';
import WorkExperienceService from '../../services/WorkExperienceService';
import { useNavigate } from 'react-router-dom';

const ListWorkExperienceComponent = () => {
    let navigate = useNavigate();
    
    const [workExperienceList, setWorkExperience] = useState([]);

    function addWorkExperience() {
        navigate('/add-workExperience/_add');
    };

    function editWorkExperience(id) {
        navigate(`/add-workExperience/${id}`);
    }

    function deleteWorkExperience (id) {
        WorkExperienceService.deleteWorkExperience(id).then( res => {
            setWorkExperience(workExperienceList.filter(workExperience => workExperience.id !== id));
        });
    }

    function viewWorkExperience (id) {
        navigate(`/view-workExperience/${id}`);
    }

    useEffect(() => {
        (async () => {
            try {
                await WorkExperienceService.getAllWorkExperience().then(res => { setWorkExperience(res.data) });
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <div>
            <h2 className='text-center'>Work Experience</h2>
            <div className = "row">
                <button className="btn btn-primary" onClick={addWorkExperience}> Add Work Experience </button>
            </div>
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th> Company Name </th>
                            <th> Start Date </th>
                            <th> End Date </th>
                            <th> Description </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            workExperienceList.map(
                                workExperience =>
                                <tr key={workExperience.id}>
                                    <td> {workExperience.companyName} </td>
                                    <td> {workExperience.startDate} </td>
                                    <td> {workExperience.endDate} </td>
                                    <td> {workExperience.description} </td>
                                    <td>
                                        <button onClick = {() => editWorkExperience(workExperience.id)} className = "btn btn-info"> Update </button>
                                        <button style={{marginLeft: "10px"}} onClick = {() => deleteWorkExperience(workExperience.id)} className = "btn btn-danger"> Delete </button>
                                        <button style={{marginLeft: "10px"}} onClick = {() => viewWorkExperience(workExperience.id)} className = "btn btn-info"> View </button>
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

export default ListWorkExperienceComponent