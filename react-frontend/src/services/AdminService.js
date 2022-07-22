import axios from 'axios';

const ADMIN_API_BASE_URL = "http://localhost:8080/api/v1/signin";

class AdminService {

    authenticateUser(user) {
        return axios.post(ADMIN_API_BASE_URL, user, {headers: {'Content-Type': 'application/json'}});
    }
} 

export default new AdminService()