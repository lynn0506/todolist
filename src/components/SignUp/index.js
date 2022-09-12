import React, { useState } from 'react';

import './SignUp.scss';

function SignUp() {
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

    return (
        <div className="template-container">
            <div className="head-container">
                <h1>회원가입</h1>
            </div>
            <form className="sign-up-form">
                <label>
                    아이디
                    <input
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
                        type="password"
                        id="passwordCheck"
                        name="passwordCheck"
                        value={formData.passwordCheck}
                        onChange={onChangeFormData}
                        placeholder="비밀번호 확인"
                    />
                </label>
                <button type="submit">회원가입 완료</button>
                <button>로그인</button>
            </form>        
        </div>
    );
}

export default SignUp;