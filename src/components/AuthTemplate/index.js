import React, { useState } from 'react';

import Login from '../Login';
import SignUp from '../SignUp';

const LOGIN_PAGE = 'login';
const SIGNUP_PAGE = 'signup';

function AuthTemplate() {
    const [pageName, setPageName] = useState(LOGIN_PAGE);

    const routeToLoginPage = (e) => {
        e.preventDefault();
        setPageName(LOGIN_PAGE);
    };

    const routeToSignUpPage = (e) => {
        e.preventDefault();
        setPageName(SIGNUP_PAGE);
    };

    if (pageName === LOGIN_PAGE) {
        return <Login onClickSignUpBtn={routeToSignUpPage} />;
    } else {
        return <SignUp onClickLoginBtn={routeToLoginPage} />;
    }
}

export default AuthTemplate;
