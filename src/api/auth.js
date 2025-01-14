import axios from 'axios';
import { checkApiResponseStatus } from '../utils/auth';

export const signUp = ({ username, password }) => {
    axios
        .post('/api/accounts/signup/', { username, password })
        .then((res) => {
            console.log(res);
            alert('회원가입 완료');
        })
        .catch((error) => {
            console.log(error);
        });
};

export const login = ({ username, password }) => {
    axios
        .post('/api/accounts/login/', { username, password })
        .then((res) => {
            console.log(res);
            window.sessionStorage.setItem('isLoggedIn', true);
            window.location.reload();
        })
        .catch((error) => {
            console.log(error);
        });
};

export const logout = () => {
    axios
        .post('/api/accounts/logout/')
        .then(() => {
            window.sessionStorage.clear();
            window.location.reload();
        })
        .catch((error) => {
            console.log(error);
            checkApiResponseStatus(error.response.status);
        });
};
