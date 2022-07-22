import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EducationService from '../../services/EducationService';

const ViewEducationComponent = () => {
    let navigate = useNavigate();
    let { id } = useParams();

    const [education, setEducation] = useState([]);

    function cancel() {
        navigate('/education');
    }

    useEffect(() => {
        (async () => {
            try {
                await EducationService.getEducationById(id).then(res => { setEducation(res.data) });
            } catch (error) {
                console.log(error);
            }
        })();
    }, [id]);

    return (
            <div>
                <div className='card col-md-6 offset-md-3'>
                    <h3 className='text-center'> View Education </h3>
                    <div className='card-body'>
                        <div className='row'>
                            <label> University Name: </label>
                            <div> { education.universityName } </div>
                        </div>
                        <div className='row'>
                            <label> Start Date: </label>
                            <div> { education.startDate } </div>
                        </div>
                        <div className='row'>
                            <label> End Date: </label>
                            <div> { education.endDate } </div>
                        </div>
                        <div className='row'>
                            <label> GPA: </label>
                            <div> { education.gpa } </div>
                        </div>
                        <div className='row'>
                            <label> Country: </label>
                            <div> { education.country } </div>
                        </div>
                        <div className='row'>
                            <label> Description: </label>
                            <div> { education.description } </div>
                        </div>
                        <button className="btn btn-danger" type="button" onClick={cancel} style={{marginLeft: "10px"}}>Cancel</button>
                    </div>
                </div>
            </div>
        );
}

export default ViewEducationComponent;