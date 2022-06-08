import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import axios from "axios"

const LogIn = () => {
    const [logIn, setLogIn] = useState({});

    const inputHandler = (event) => {
        setLogIn({
            ...logIn,
            [event.target.name]: event.target.value,
        });
        console.log(logIn)
    };
    const sendForm = (event) => {
        event.preventDefault(event);
        axios.post(
            "http://159.89.2.247:8003/api/users/signin/",
            logIn
        ) .then(response=>console.log(response.data))
    };
    return <div>
        <form onSubmit={sendForm}>
            <input name="username" onChange={inputHandler} type="text"/>Имя
            <input name="password" onChange={inputHandler} type="text"/>Пароль
            <button>Авторизироваться</button>
        </form>
        Ещё не зарегестрированы?
        <Link to="/signup">Регистрация</Link>
    </div>
};

export default LogIn;