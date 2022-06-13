import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const MerchDetail = () => {
    const [cap, setCap] = useState([]);
    const [brand, setBrand] = useState({});
    const [brandName, setBrandName] = useState("Noike");
    const [brandImg, setBrandImg] = useState("blya");
    const {id} = useParams();

    const getCap = () => {
        fetch(`http://159.89.2.247:8003/api/caps/${id}/`)
            .then(response => response.json())
            .then(data => setCap(data))
    };

    useEffect(()=>{getCap()}, []);
    useEffect(()=>{setBrand(cap.brand); if(brand!=null){setBrandName(brand.name); setBrandImg(brand.img)}}, [cap]);
    const BrandName=function () {
        return (<div>brand.name</div>)
    };

    return (
        <div>
            <div>{cap.name}</div>
            <div>{cap.price}</div>
            <div>{brandName}</div>
            <img src={brandImg} alt=""/>
            <div>{cap.description}</div>
        </div>
    );
};

export default MerchDetail;