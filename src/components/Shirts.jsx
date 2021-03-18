import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fade, makeStyles } from '@material-ui/core/styles';
import { getAllShirts } from '../redux/action';
import ShirtCard from './ShirtCard';
import Grid from '@material-ui/core/Grid';
import { Divider } from '@material-ui/core';
import '../App.css';
import FilterContainer from "./FilterContainer";
import {discountPrice} from "./PriceComponent"
import RightSideBar from './RightSideBar';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: "30px",
        display: "grid",
        gridTemplateColumns: "2fr 10fr"
    },
    recommended:{
        fontWeight:"bold"
    }
}))
export default function Shirts() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const data = useSelector((state) => state.data);
    const [ hoverActive, setHoverActive ] = useState(false)
    const [sortValue, setSortValue] = useState('Recommended')
    const [sortByDiscount, setSortByDiscount] = useState('')

    const handleHoverEnter = () => {
        setHoverActive(true)
    }

    const handleHoverLeave = () => {
        setHoverActive(false)
    }

    const handleSort = (e)=>{
        setSortValue(e.target.textContent)
        setSortByDiscount(e.target.id)
    }

    useEffect(() => {
        dispatch(getAllShirts({categories:[], gender:"", discount:""}));
    }, []);

    console.log(sortByDiscount);

    return (
        <div>
            <div onMouseEnter={ handleHoverEnter }  >Sort by: <span className={classes.recommended}>{sortValue}</span></div>
            { hoverActive &&<div onClick={handleSort} onMouseLeave={ handleHoverLeave }>
                <div id='desc'>Price: High to Low</div>
                <div id='asc'>Price: Low to High</div>
            </div>}
            <RightSideBar />
            <div className={classes.container}>
                <Grid container spacing={2}>
                    <FilterContainer />
                </Grid>
                <div className="shirtContainer" >
                    {data?.sort((a,b)=> {
                        if(sortByDiscount == 'asc') return discountPrice(a.price, a.discount)-discountPrice(b.price, b.discount)
                        else if(sortByDiscount == 'desc') return discountPrice(b.price, b.discount)-discountPrice(a.price, a.discount)
                        else return 0
                    }).map((item) => <ShirtCard key={item.id} data={item} />)}
                </div>
            </div>
        </div>
    );
}
