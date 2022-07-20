import axios from 'axios';

const PERSONAL_DETAILS_API_BASE_URL = "http://localhost:8080/api/v1/personalDetails";

class PersonalDetailsService {

    getPersonalDetails() {
        return axios.get(PERSONAL_DETAILS_API_BASE_URL);
    }

    updateEmployee(personalDetails){
        return axios.put(PERSONAL_DETAILS_API_BASE_URL, personalDetails);
    }

}

export default new PersonalDetailsService()