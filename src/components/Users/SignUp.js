import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import axios from "axios"

const SignUp = () => {
    const [user, setUser] = useState({});

    const inputHandler = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
        console.log(user)
    };
    const sendForm = (event) => {
        event.preventDefault(event);
        axios.post(
            "http://159.89.2.247:8003/api/users/signup/",
            user
        ) .then(response=>console.log(response.data))
    };
    return (
        <div>
            <form onSubmit={sendForm}>
                <input name="username" type="text" onChange={inputHandler} placeholder="Логин" autoFocus/>
                <input name="password" type="password" onChange={inputHandler} placeholder="Пароль" />
                <input name="password2" type="password" onChange={inputHandler} placeholder="Пароль ещё раз" />
                <input name="email" type="email" onChange={inputHandler} placeholder="Мыло" />
                <input name="first_name" type="text" onChange={inputHandler} placeholder="Имя" />
                <input name="last_name" type="text" onChange={inputHandler} placeholder="фамилия" />
                <input name="phone" type="text" onChange={inputHandler} placeholder="Номер" />
                <button>Зарегистрироваться</button>
            </form>
            Уже зарегестрированы?
            <Link to="/login">Авторизация</Link>
        </div>
    )
};

export default SignUp;