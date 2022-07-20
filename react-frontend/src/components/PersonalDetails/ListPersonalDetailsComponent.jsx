import React, {useState, useEffect} from 'react';
import PersonalDetailsService from '../../services/PersonalDetailsService'

const ListPersonalDetailsComponent = () => {
    const [personalDetails, setPersonalDetails] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                await PersonalDetailsService.getPersonalDetails().then(res => { setPersonalDetails(res.data) });
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <div>
            <h2 className='text-center'>Personal Details</h2>
            <div className='card col-md-6 offset-md-3'>
                    <div className='card-body'>
                        <div className='row7'>
                            <label> First Name: </label>
                            <div> { personalDetails.firstName } </div>
                        </div>
                        <div className='row'>
                            <label> Last Name: </label>
                            <div> { personalDetails.lastName } </div>
                        </div>
                        <div className='row'>
                            <label> Address: </label>
                            <div> { personalDetails.address } </div>
                        </div>
                        <div className='row'>
                            <label> Phone Number: </label>
                            <div> { personalDetails.phoneNumber } </div>
                        </div>
                        <div className='row'>
                            <label> Email: </label>
                            <div> { personalDetails.emailId } </div>
                        </div>
                        <div className=''>
                            <label> Date of Birth: </label>
                            <div> { personalDetails.dateOfBirth } </div>
                        </div>
                        <div className=''>
                            <label> Description: </label>
                            <div> { personalDetails.description } </div>
                        </div>
                        <div>
                            <label> Image: </label>
                            <img className='img-thumbnail' width={100} src={`images/${personalDetails.image}`} alt="myImage"/>
                        </div>
                    </div>
            </div>
        </div>
    );
  }

export default ListPersonalDetailsComponent