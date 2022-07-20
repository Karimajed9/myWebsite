import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import WorkExperienceService from '../../services/WorkExperienceService';

const CreateOrUpdateWorkExperienceComponent = () => {
    let navigate = useNavigate();
    let { id } = useParams();
    
    const [companyName, setCompanyName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');
    
    const handleCompanyName = event => {
        setCompanyName(event.target.value)
    }

    const handleEndDate = event => {
        setEndDate(event.target.value);
    }

    const handleStartDate = event => {
        setStartDate(event.target.value)
    }

    const handleDescription = event => {
        setDescription(event.target.value)
    }

    function createOrUpdateWorkExperience() {
        let workExperience = {companyName: companyName, startDate: startDate, endDate: endDate, description: description};
        console.log('Work Experience => ' + JSON.stringify(workExperience));

        if (id === "_add") {
            WorkExperienceService.addWorkExperience(workExperience).then(res => {
                navigate('/workExperience');
            });
        } else {
            WorkExperienceService.updateWorkExperience(workExperience, id).then(res => {
                navigate('/workExperience');
            });
        }
    }

    function cancel() {
        navigate('/workExperience');
    }

    useEffect(() => {
        if (id === "_add") {
            return
        } else {
            (async () => {
                try {
                    await WorkExperienceService.getWorkExperienceById(id).then(res => { 
                        let workExperience = res.data;
                        setCompanyName(workExperience.companyName);
                        setStartDate(workExperience.startDate);
                        setEndDate(workExperience.endDate);
                        setDescription(workExperience.description);
                    });
                } catch (error) {
                    console.log(error);
                }
            })();
        }
    }, [id]);

    function getTitle() {
        if (id === "_add") {
            return <h3 className='text-center'>Add Work Experience</h3>
        } else {
            return <h3 className='text-center'>Update Work Experience</h3>
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
                                        <label> Company Name: </label>
                                        <input placeholder='Company Name' name='companyName' className='form-control'
                                            value={companyName} onChange={handleCompanyName}/>
                                    </div>
                                    <div className='form-group'>
                                        <label> Start Date: </label>
                                        <input placeholder='Start Date' name='startDate' className='form-control'
                                            value={startDate} onChange={handleStartDate}/>
                                    </div>
                                    <div className='form-group'>
                                        <label> End Date: </label>
                                        <input placeholder='End Date' name='endDate' className='form-control'
                                            value={endDate} onChange={handleEndDate}/>
                                    </div>
                                    <div className='form-group'>
                                        <label> Description: </label>
                                        <input placeholder='Description' name='description' className='form-control'
                                            value={description} onChange={handleDescription}/>
                                    </div>


                                    <button className="btn btn-success" type="button" onClick={createOrUpdateWorkExperience}>Save</button>
                                    <button className="btn btn-danger" type="button" onClick={cancel} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default CreateOrUpdateWorkExperienceComponent;