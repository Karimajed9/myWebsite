import React, {useState, useEffect} from 'react';
import EducationService from '../../services/EducationService';
import { useNavigate } from 'react-router-dom';

const ListEducationComponent = () => {
    let navigate = useNavigate();
    
    const [educationList, setEducation] = useState([]);

    function addEducation() {
        navigate('/add-education/_add');
    };

    function editEducation(id) {
        navigate(`/add-education/${id}`);
    }

    function deleteEducation(id) {
        EducationService.deleteEducation(id).then( res => {
            setEducation(educationList.filter(education => education.id !== id));
        });
    }

    function viewEducation(id) {
        navigate(`/view-education/${id}`);
    }

    useEffect(() => {
        (async () => {
            try {
                await EducationService.getAllEducation().then(res => { setEducation(res.data) });
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <div>
            <h2 className='text-center'>Education</h2>
            <div className = "row">
                <button className="btn btn-primary" onClick={addEducation}> Add Education </button>
            </div>
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th> University Name </th>
                            <th> Start Date </th>
                            <th> End Date </th>
                            <th> GPA </th>
                            <th> Country </th>
                            <th> Description </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            educationList.map(
                                education =>
                                <tr key={education.id}>
                                    <td> {education.universityName} </td>
                                    <td> {education.startDate} </td>
                                    <td> {education.endDate} </td>
                                    <td> {education.gpa} </td>
                                    <td> {education.country} </td>
                                    <td> {education.description} </td>
                                    <td>
                                        <button onClick = {() => editEducation(education.id)} className = "btn btn-info"> Update </button>
                                        <button style={{marginLeft: "10px"}} onClick = {() => deleteEducation(education.id)} className = "btn btn-danger"> Delete </button>
                                        <button style={{marginLeft: "10px"}} onClick = {() => viewEducation(education.id)} className = "btn btn-info"> View </button>
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

export default ListEducationComponent