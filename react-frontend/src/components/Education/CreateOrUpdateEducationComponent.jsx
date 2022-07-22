import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EducationService from '../../services/EducationService';

const CreateOrUpdateEducationComponent = () => {
    let navigate = useNavigate();
    let { id } = useParams();
    
    const [universityName, setUniversityName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [gpa, setGpa] = useState('');
    const [country, setCountry] = useState('');
    const [description, setDescription] = useState('');
    
    const handleUniversityName = event => {
        setUniversityName(event.target.value)
    }

    const handleEndDate = event => {
        setEndDate(event.target.value);
    }

    const handleStartDate = event => {
        setStartDate(event.target.value)
    }

    const handleGpa = event => {
        setGpa(event.target.value)
    }

    const handleCountry = event => {
        setCountry(event.target.value)
    }

    const handleDescription = event => {
        setDescription(event.target.value)
    }

    function createOrUpdateEducation() {
        let education = {universityName: universityName, startDate: startDate, endDate: endDate, gpa: gpa, country: country, description: description};
        console.log('Education => ' + JSON.stringify(education));

        if (id === "_add") {
           EducationService.addEducation(education).then(res => {
                navigate('/education');
            });
        } else {
            EducationService.updateEducation(education, id).then(res => {
                navigate('/education');
            });
        }
    }

    function cancel() {
        navigate('/education');
    }

    useEffect(() => {
        if (id === "_add") {
            return
        } else {
            (async () => {
                try {
                    await EducationService.getEducationById(id).then(res => { 
                        let education = res.data;
                        setUniversityName(education.universityName);
                        setStartDate(education.startDate);
                        setEndDate(education.endDate);
                        setGpa(education.gpa);
                        setCountry(education.country);
                        setDescription(education.description);
                    });
                } catch (error) {
                    console.log(error);
                }
            })();
        }
    }, [id]);

    function getTitle() {
        if (id === "_add") {
            return <h3 className='text-center'>Add Education</h3>
        } else {
            return <h3 className='text-center'>Update Education</h3>
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
                                        <label> University Name: </label>
                                        <input placeholder='University Name' name='universityName' className='form-control'
                                            value={universityName} onChange={handleUniversityName}/>
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
                                        <label> GPA: </label>
                                        <input placeholder='GPA' name='gpa' className='form-control'
                                            value={gpa} onChange={handleGpa}/>
                                    </div>
                                    <div className='form-group'>
                                        <label> Country: </label>
                                        <input placeholder='Country' name='country' className='form-control'
                                            value={country} onChange={handleCountry}/>
                                    </div>
                                    <div className='form-group'>
                                        <label> Description: </label>
                                        <input placeholder='Description' name='description' className='form-control'
                                            value={description} onChange={handleDescription}/>
                                    </div>


                                    <button className="btn btn-success" type="button" onClick={createOrUpdateEducation}>Save</button>
                                    <button className="btn btn-danger" type="button" onClick={cancel} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default CreateOrUpdateEducationComponent;