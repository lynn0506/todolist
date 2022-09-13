import React, { useState } from 'react';
import { isValidUserName, isValidPassword } from '../../utils/auth';

import './SignUp.scss';

function SignUp({onClickLoginBtn}) {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        passwordCheck: '',
    });

    const onChangeFormData = (e) => {
        e.preventDefault();

        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const {username, password, passwordCheck} = formData;

        if (isValidUserName(username) && isValidPassword(password, passwordCheck)) {
            console.log('valid form');
        }
    };

    return (
        <div className="template-container">
            <div className="head-container">
                <h1>회원가입</h1>
            </div>
            <form className="sign-up-form" onSubmit={onSubmit}>
                <label>
                    아이디
                    <input
                        required
                        autoFocus
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={onChangeFormData}
                        placeholder="아이디"  
                    />
                </label>
                <label>
                    비밀번호
                    <input
                        required
                        autoComplete="password"
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={onChangeFormData}
                        placeholder="6자리 이상의 비밀번호"
                    />
                </label>
                <label>
                    비밀번호 확인
                    <input
                        required
                        autoComplete="passwordCheck"
                        type="password"
                        id="passwordCheck"
                        name="passwordCheck"
                        value={formData.passwordCheck}
                        onChange={onChangeFormData}
                        placeholder="비밀번호 확인"
                    />
                </label>
                <button type="submit">회원가입 완료</button>
                <button onClick={onClickLoginBtn}>로그인</button>
            </form>     
        </div>
    );
}

export default SignUp;