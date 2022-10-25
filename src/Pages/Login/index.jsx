import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import { validator } from 'lib/validator';
import { tryLoginOrSignup } from 'lib/utils/fetchers';

const Login = () => {
  const [formData, setFormData] = useState({ id: '', password: '' });

  const navigate = useNavigate();
  const isFormValid = Object.entries(formData).every(([key, value]) =>
    validator[key](value)
  );

  const onChangeFormInput = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async event => {
    event.preventDefault();
    if (!isFormValid) return alert('아이디와 비밀번호를 확인해주세요.');

    const { token, message } = await tryLoginOrSignup(formData);

    if (!token) return alert(message);

    localStorage.setItem('token', token);
    navigate('/home');
  };

  return (
    <div className="wrapper">
      <form className="login-form" onSubmit={onSubmit}>
        <header>
          <h1 className="logo">Westagram</h1>
        </header>

        <div className="input-group">
          <input
            className="login-input"
            name="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={onChangeFormInput}
            value={formData.id}
          />
          <input
            className="login-input"
            name="password"
            type="password"
            placeholder="비밀번호"
            onChange={onChangeFormInput}
            value={formData.password}
          />

          <button
            className="login-button"
            type="button"
            disabled={!isFormValid}
            onClick={onSubmit}
          >
            로그인
          </button>
        </div>

        <button className="lost-password">비밀번호를 잊으셨나요?</button>
      </form>
    </div>
  );
};

export default Login;
