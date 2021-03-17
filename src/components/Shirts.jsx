import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllShirts } from "../redux/action";
import ShirtCard from "./ShirtCard"

export default function Shirts() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data)

    useEffect(() => {
        dispatch(getAllShirts())
      
    }, [])

    console.log(data)

    return (
        <div>
            <ShirtCard data={data}/>
        </div>
    )
}
