import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const CreateEmployeeComponent = () => {
    let navigate = useNavigate();
    let { id } = useParams();
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    
    const handleFirstName = event => {
        setFirstName(event.target.value)
    }

    const handleLastName = event => {
        setLastName(event.target.value)
    }

    const handleEmailId = event => {
        setEmailId(event.target.value)
    }

    function saveOrUpdateEmployee() {
        let employee = {firstName: firstName, lastName: lastName, emailId: emailId};
        console.log('employee => ' + JSON.stringify(employee));

        if (id === "_add") {
            EmployeeService.createEmployee(employee).then(res => {
                navigate('/employees');
            });
        } else {
            EmployeeService.updateEmployee(employee, id).then(res => {
                navigate('/employees');
            });
        }
    }

    function cancel() {
        navigate('/employees');
    }

    useEffect(() => {
        if (id === "_add") {
            return
        } else {
            (async () => {
                try {
                    await EmployeeService.getEmployeeById(id).then(res => { 
                        let employee = res.data;
                        setFirstName(employee.firstName);
                        setLastName(employee.lastName);
                        setEmailId(employee.emailId);
                    });
                } catch (error) {
                    console.log(error);
                }
            })();
        }
    }, [id]);

    function getTitle() {
        if (id === "_add") {
            return <h3 className='text-center'>Add Employee</h3>
        } else {
            return <h3 className='text-center'>Update Employee</h3>
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
                                        <label> First Name </label>
                                        <input placeholder='First Name' name='firstName' className='form-control'
                                            value={firstName} onChange={handleFirstName}/>
                                    </div>
                                    <div className='form-group'>
                                        <label> Last Name </label>
                                        <input placeholder='Last Name' name='lastName' className='form-control'
                                            value={lastName} onChange={handleLastName}/>
                                    </div>
                                    <div className='form-group'>
                                        <label> Emaild Id: </label>
                                        <input placeholder='Email Address' name='emailId' className='form-control'
                                            value={emailId} onChange={handleEmailId}/>
                                    </div>

                                    <button className="btn btn-success" type="button" onClick={saveOrUpdateEmployee}>Save</button>
                                    <button className="btn btn-danger" type="button" onClick={cancel} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default CreateEmployeeComponent;