import React, { useState } from 'react';

import './Login.scss';

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const onChangeFormData = (e) => {
        e.preventDefault();

        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    return (
        <div className="template-container">
            <div className="head-container">
                <h1>로그인</h1>
            </div>
            <form className="login-form" >
                <input
                    autoFocus
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={onChangeFormData}
                    placeholder="아이디"
                />
                <input
                    autoComplete="password"
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={onChangeFormData}
                    placeholder="비밀번호"
                />
                <button type="submit">로그인</button>
                <button>회원가입</button>
            </form>
        </div>
    );
}

export default Login;
