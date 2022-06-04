import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

const Users = () => {
    const [names, setNames] = useState([]);

    const getNames = () => {
        fetch("http://159.89.2.247:8003/api/users/"
        ).then(response => response.json()
        ).then(data => {
            setNames(data.results)
        })
    };

    useEffect(getNames, []);


    return (
        <div>
            <h2>Users List</h2>
            {names.map(name => <User name={name} key={name.id}/>)}
        </div>
    );
};

const User = ({name}) => {
    return (
        <div>
            <h3><Link to={`/users/${name.id}`}>{name.username} {name.email}</Link></h3>
        </div>
    );
};

export default Users;