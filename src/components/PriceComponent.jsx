import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  
    priceContainer: {
        display: 'flex',
        width: "85%",
        justifyContent:"space-between"
    },
    actualPrice:{
        color: "grey",
        textDecoration:"line-through"
    },
    discount:{
        color:"#FF905A"
    },
     
});

export const discountPrice = (price, discount) => {
    return Math.round(Number(price) * (100 - Number(discount)) / 100);
};
export default function PriceComponent({price, discount}) {
    const classes = useStyles();

    return (
        <div className={classes.priceContainer}>
            <Typography gutterBottom variant="body2" component="p">
                Rs. {discountPrice(price, discount)}
            </Typography>
            <Typography className={classes.actualPrice}  variant="body2" color="textSecondary" component="p">
                Rs {price}
            </Typography>
            <Typography className={classes.discount} variant="body2" color="textSecondary" component="p">
                ({discount}% OFF)
            </Typography>
    </div>
    )
}
