import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import WorkExperienceService from '../../services/WorkExperienceService';

const ViewWorkExperienceComponent = () => {
    let navigate = useNavigate();
    let { id } = useParams();

    const [workExperience, setWorkExperience] = useState([]);

    function cancel() {
        navigate('/workExperience');
    }

    useEffect(() => {
        (async () => {
            try {
                await WorkExperienceService.getWorkExperienceById(id).then(res => { setWorkExperience(res.data) });
            } catch (error) {
                console.log(error);
            }
        })();
    }, [id]);

    return (
            <div>
                <div className='card col-md-6 offset-md-3'>
                    <h3 className='text-center'> View Work Experience </h3>
                    <div className='card-body'>
                        <div className='row'>
                            <label> Company Name: </label>
                            <div> { workExperience.companyName } </div>
                        </div>
                        <div className='row'>
                            <label> Start Date: </label>
                            <div> { workExperience.startDate } </div>
                        </div>
                        <div className='row'>
                            <label> End Date: </label>
                            <div> { workExperience.endDate } </div>
                        </div>
                        <div className='row'>
                            <label> Description: </label>
                            <div> { workExperience.description } </div>
                        </div>
                        <button className="btn btn-danger" type="button" onClick={cancel} style={{marginLeft: "10px"}}>Cancel</button>
                    </div>
                </div>
            </div>
        );
}

export default ViewWorkExperienceComponent;