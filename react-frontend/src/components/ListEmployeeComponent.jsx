import React, {useState, useEffect} from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
    let navigate = useNavigate();
    
    const [employees, setEmployees] = useState([]);

    function addEmployee() {
        navigate('/add-employee/_add');
    };

    function editEmployee(id) {
        navigate(`/add-employee/${id}`);
    }

    function deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then( res => {
            setEmployees(employees.filter(employee => employee.id !== id));
        });
    }

    function viewEmployee(id) {
        navigate(`/view-employee/${id}`);
    }

    useEffect(() => {
        (async () => {
            try {
                await EmployeeService.getEmployees().then(res => { setEmployees(res.data) });
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <div>
            <h2 className='text-center'>Employees List</h2>
            <div className = "row">
                <button className="btn btn-primary" onClick={addEmployee}> Add Employee</button>
            </div>
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th> Employee First Name </th>
                            <th> Employee Last Name </th>
                            <th> Employee Emaild Id </th>
                            <th> Actions </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            employees.map(
                                employee =>
                                <tr key={employee.id}>
                                    <td> {employee.firstName} </td>
                                    <td> {employee.lastName} </td>
                                    <td> {employee.emailId} </td>
                                    <td>
                                        <button onClick = {() => editEmployee(employee.id)} className = "btn btn-info"> Update </button>
                                        <button style={{marginLeft: "10px"}} onClick = {() => deleteEmployee(employee.id)} className = "btn btn-danger"> Delete </button>
                                        <button style={{marginLeft: "10px"}} onClick = {() => viewEmployee(employee.id)} className = "btn btn-info"> View </button>
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

export default ListEmployeeComponent