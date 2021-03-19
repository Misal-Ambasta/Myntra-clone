import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllShirts } from "../redux/action"
import { makeStyles, Box, RadioGroup, Radio, Typography, Paper, Checkbox, FormControl, FormControlLabel } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
    formControlLabel: {
        // fontSize: "17px",
        // fontWeight: "300",
    },
    paperFilter: {
        padding: "15px 30px",
        color: theme.palette.text.secondary,
        width: '100%',
        cursor: 'pointer',
        height: 'max-content',
        marginTop:"10px"
    }
}));

export default function FilterContainer() {
    const classes = useStyles();
    const [filterShirt, setFilterShirt] = useState({categories:[], gender:"", discount:""})
    const dispatch = useDispatch();

    useEffect(()=>{
        let str = "";

        for(let key in filterShirt){
            if(Array.isArray(filterShirt[key])){
                filterShirt[key].forEach(item => {
                    str+=`${key}=${item}&`
                })
            }else if(filterShirt[key]){
                if(key == "discount"){
                    str += `${key}_gte=${filterShirt[key]}&`
                }
                else{

                    str += `${key}=${filterShirt[key]}&`
                }
            }
        }

        dispatch(getAllShirts(str))

    },[filterShirt])

    const handleGenderFilter = (e) => {
        setFilterShirt({
            ...filterShirt, gender: e.target.value
        })
    }
    const handleCategoriesFilter = (e) => {
        let value = filterShirt.categories.findIndex((item) => item === e.target.value)
        let newCategories
        if(value>=0){
            newCategories = filterShirt.categories.filter(item => item !== e.target.value)
           
        }else{
            newCategories = [...filterShirt.categories, e.target.value]
        }
        setFilterShirt({
            ...filterShirt, categories: newCategories
        })
    }
    const handleDiscountFilter = (e) => {
        setFilterShirt({
            ...filterShirt, discount: e.target.value
        })
    }

    
    return (
        <Paper className={classes.paperFilter}>
            <Box>
                <Typography gutterBottom variant="button" color="textPrimary">
                    Filters
                </Typography>
                <hr />
                <RadioGroup aria-label="category" name="category" onChange={handleGenderFilter}>
                    <FormControlLabel size="small" style={{ color: 'black' }} value="men" control={<Radio color="secondary" size="small" />} label="Men" />
                    <FormControlLabel size="small" style={{ color: 'black' }} value="women" control={<Radio color="secondary" size="small" />} label="Women" />
                    <FormControlLabel size="small" style={{ color: 'black' }} value="boys" control={<Radio color="secondary" size="small" />} label="Boys" />
                    <FormControlLabel size="small" style={{ color: 'black' }} value="girls" control={<Radio color="secondary" size="small" />} label="Girls" />
                </RadioGroup>
            </Box>
            <hr />
            <Box>
                <FormControl component="fieldset" onChange={handleCategoriesFilter}>
                    <Typography gutterBottom variant="button" color="textPrimary">
                        CATEGORIES
                    </Typography>
                    <FormControlLabel name="Shirts" style={{ fontSize: '1px' }} value="shirts" control={<Checkbox color="secondary" />} label={<Typography className={classes.formControlLabel}>Shirts</Typography>} labelPlacement="end" />
                    <FormControlLabel name="Sleep Shirts" value="sleepShirts" control={<Checkbox color="secondary" />} label={<Typography className={classes.formControlLabel}>Sleep Shirts</Typography>} labelPlacement="end" />
                </FormControl>
            </Box>

            <hr />
            <Box>
                <Typography gutterBottom variant="button" color="textPrimary">
                DISCOUNT RANGE
                </Typography>
               
                <RadioGroup aria-label="category" name="category" onChange={handleDiscountFilter}>
                    <FormControlLabel size="small" style={{ color: 'black' }} value="10" control={<Radio color="secondary" size="small" />} label="10% and above" />
                    <FormControlLabel size="small" style={{ color: 'black' }} value="20" control={<Radio color="secondary" size="small" />} label="20% and above" />
                    <FormControlLabel size="small" style={{ color: 'black' }} value="30" control={<Radio color="secondary" size="small" />} label="30% and above" />
                    <FormControlLabel size="small" style={{ color: 'black' }} value="40" control={<Radio color="secondary" size="small" />} label="40% and above" />
                </RadioGroup>
            </Box>
        </Paper>
    );
}
