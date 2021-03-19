import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { getAllShirts } from '../redux/action';
import ShirtCard from './ShirtCard';
import Grid from '@material-ui/core/Grid';
import '../App.css';
import FilterContainer from "./FilterContainer";
import {discountPrice} from "./PriceComponent"
import RightSideBar from './RightSideBar';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root:{
        position:"relative"
    },
    container: {
        paddingTop: "20px",
        display: "grid",
        gridTemplateColumns: "2fr 10fr"
    },
    recommended:{
        fontWeight:"bold"
    },
    circularProgress:{
        margin: "auto"
    },
    sortBy:{
        width:"200px",
        border:"1px solid black",
        marginLeft:"85%",
        padding:"7px 10px",
       
    },
    sortBoxOptions:{
        position:"absolute",
        zIndex:"1000",
        cursor:"pointer",
        backgroundColor:"white",
        borderTop:"0"
    },
    sortBox:{
        marginTop:"20px",
        borderRadius:"2px"
    }
}))
export default function Shirts() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const data = useSelector((state) => state.data);
    const isLoading = useSelector((state) => state.isLoading);
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

    return (
        <div className={classes.root}>
            <div className={`${classes.sortBy} ${classes.sortBox}`} onMouseEnter={ handleHoverEnter } style={{borderBottom : hoverActive ? "0px" : "1px solid black"}}>Sort by: <span className={classes.recommended}>{sortValue}</span></div>
            { hoverActive &&<div className={`${classes.sortBy} ${classes.sortBoxOptions}`} onClick={handleSort} onMouseLeave={ handleHoverLeave }>
                <div id='desc'>Price: High to Low</div>
                <div id='asc'>Price: Low to High</div>
            </div>}
            <RightSideBar />
            <div className={classes.container}>
                <Grid container spacing={2}>
                    <FilterContainer />
                </Grid>
                
                <div className="shirtContainer" >
                    
                    {isLoading ? <CircularProgress className={classes.circularProgress} /> : data?.sort((a,b)=> {
                        if(sortByDiscount == 'asc') return discountPrice(a.price, a.discount)-discountPrice(b.price, b.discount)
                        else if(sortByDiscount == 'desc') return discountPrice(b.price, b.discount)-discountPrice(a.price, a.discount)
                        else return 0
                    }).map((item) => <ShirtCard key={item.id} data={item} />)}
                </div>
            </div>
        </div>
    );
}
