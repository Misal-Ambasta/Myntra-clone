import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles({
    wishList:{
        display:"flex",
        backgroundColor:"white",
        paddingTop: "50x",
        color:"black",
        width:"320px",
        height:"60px",
        outline:"none",
        borderRadius:"2px",
        cursor:"pointer",
        border:"1px solid grey",
        
    },
    wishlistText:{
        width:"20%",
    },
    heartIcon:{
        padding:"14px",
        paddingLeft:"70px"
    },
    wishListText:{
        fontSize:"24px",
        paddingTop:"14px"
    }
})

export default function WishListBtn({handleWishlist, wishBtn}) {
    const classes = useStyles();
    return (
        <button style={{backgroundColor: wishBtn == -1? "white": "#535766"}} onClick={handleWishlist} className={classes.wishList} >
            <FavoriteBorderIcon style={{color: wishBtn == -1? "grey": "#FF527B"}} className={classes.heartIcon} /> 
            <div style={{color: wishBtn == -1? "#535766": "white"}} className={classes.wishListText} > {wishBtn == -1 ? "WISHLIST": "WISHLISTED" }</div>
        </button>
    )
}

