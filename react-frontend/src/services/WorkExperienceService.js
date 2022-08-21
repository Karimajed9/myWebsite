import axios from 'axios';

const WORK_EXPERIENCE_API_BASE_URL = "http://localhost:8080/api/v1/workExperience";

class WorkExperienceService {

    getAllWorkExperience() {
        return axios.get(WORK_EXPERIENCE_API_BASE_URL);
    }

    addWorkExperience(workExperience) {
        return axios.post(WORK_EXPERIENCE_API_BASE_URL, workExperience);
    }

    getWorkExperienceById(workExperienceId) {
        return axios.get(WORK_EXPERIENCE_API_BASE_URL + '/' + workExperienceId);
    }

    updateWorkExperience(workExperience, workExperienceId){
        return axios.put(WORK_EXPERIENCE_API_BASE_URL + '/' + workExperienceId, workExperience);
    }

    deleteWorkExperience(workExperienceId) {
        return axios.delete(WORK_EXPERIENCE_API_BASE_URL + '/' + workExperienceId);
    }
}

export default new WorkExperienceService()