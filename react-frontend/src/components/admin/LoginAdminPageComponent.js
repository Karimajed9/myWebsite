import AdminService from '../../services/AdminService';

function AdminPageComponent(usern, pass) {
    try {
        AdminService.authenticateUser(JSON.stringify({
            "username": "karimajed",
            "password": "123456"
        })).then(res => { return(JSON.stringify(res.data)) });
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default AdminPageComponent;