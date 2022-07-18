import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const ViewEmployeeComponent = () => {
    let { id } = useParams();

    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                await EmployeeService.getEmployeeById(id).then(res => { setEmployee(res.data) });
            } catch (error) {
                console.log(error);
            }
        })();
    }, [id]);

    return (
            <div>
                <div className='card col-md-6 offset-md-3'>
                    <h3 className='text-center'> View Employee Details </h3>
                    <div className='card-body'>
                        <div className='row'>
                            <label> Employee First Name: </label>
                            <div> { employee.firstName } </div>
                        </div>
                        <div className='row'>
                            <label> Employee Last Name: </label>
                            <div> { employee.lastName } </div>
                        </div>
                        <div className='row'>
                            <label> Employee Emaild ID: </label>
                            <div> { employee.emailId } </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default ViewEmployeeComponent;