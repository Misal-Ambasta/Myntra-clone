import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fade, makeStyles } from '@material-ui/core/styles';
import { getAllShirts } from '../redux/action';
import ShirtCard from './ShirtCard';
import Grid from '@material-ui/core/Grid';
import { Divider } from '@material-ui/core';
import '../App.css';
import FilterContainer from "./FilterContainer"

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: "30px",
        display: "grid",
        gridTemplateColumns: "2fr 10fr"
    }
}))
export default function Shirts() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const data = useSelector((state) => state.data);

    useEffect(() => {
        dispatch(getAllShirts({categories:[], gender:"", discount:""}));
    }, []);

    console.log(data);

    return (
        <div className={classes.container}>
            <Grid container spacing={2}>
                <FilterContainer />
            </Grid>
            <div className="shirtContainer" >
                {data.map((item) => <ShirtCard key={item.id} data={item} />)}
            </div>
        </div>
    );
}
