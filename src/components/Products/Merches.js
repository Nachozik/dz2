import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

const Merches = () => {
    const [caps, setCaps] = useState([]);
    const [loading, setLoading] = useState(true);

    const getCaps = () => {
        fetch(
            "http://159.89.2.247:8003/api/caps/"
        ).then(response => response.json())
            .then(data => {
                setCaps(data.results);
                setLoading(false);
            })
    };

    useEffect(getCaps, []);
    if(loading){return <div><img src="https://i.gifer.com/VAyR.gif" alt=""/></div>} else
        {return (
        <div>
            <h2>List of goods</h2>
            {caps.map(cap => <Merch cap={cap} key={cap.id}/>)}
        </div>
    )}
};
const Merch = ({ cap }) => {
    return (
        <div>
            <h3>
                <Link to={`/merches/${cap.id}`}>{cap.name} {cap.price} сом</Link>
            </h3>
        </div>
    );
};

export default Merches;