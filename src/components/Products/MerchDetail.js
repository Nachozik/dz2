import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



const MerchDetail = () => {
    const [cap, setCap] = useState([]);
    const [brand, setBrand] = useState({});
    const {id} = useParams();

    const getCap = () => {
        fetch(`http://159.89.2.247:8003/api/caps/${id}/`)
            .then(response => response.json())
            .then(data => setCap(data))
    };

    useEffect(()=>{getCap()}, []);
    useEffect(()=>{setBrand(cap.brand)},[cap]);
    const BrandName=function () {
        return (<div>brand.name</div>)
    };

    return (
        <div>
            <div>{cap.name}</div>
            <div>{cap.price}</div>
            <div>{brand?brand.name:"Нет"}</div>
            <img src={brand?brand.img:"https://i.gifer.com/VAyR.gif"} alt=""/>
            <div>{cap.description}</div>
        </div>
    );
};

export default MerchDetail;