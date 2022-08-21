import axios from 'axios';

const EDUCATION_API_BASE_URL = "http://localhost:8080/api/v1/education";

class EducationService {

    getAllEducation() {
        return axios.get(EDUCATION_API_BASE_URL);
    }

    addEducation(education) {
        return axios.post(EDUCATION_API_BASE_URL, education);
    }

    getEducationById(educationId) {
        return axios.get(EDUCATION_API_BASE_URL + '/' + educationId);
    }

    updateEducation(education, educationId){
        return axios.put(EDUCATION_API_BASE_URL + '/' + educationId, education);
    }

    deleteEducation(educationId) {
        return axios.delete(EDUCATION_API_BASE_URL + '/' + educationId);
    }
}

export default new EducationService()