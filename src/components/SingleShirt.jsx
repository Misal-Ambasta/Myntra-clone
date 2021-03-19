import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InsertCommentOutlinedIcon from '@material-ui/icons/InsertCommentOutlined';
import PriceComponent from "./PriceComponent";
import '../App.css';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import WishListBtn from "./WishListBtn";
import {addProductToCart, addToWishlist} from "../redux/action";


const useStyles = makeStyles((theme) => ({
    root:{
        paddingTop:"20px"
    },
    imgBox:{
        marginBottom:"15px",
        transition: "transform .2s",
        position: "relative",
        boxSizing:"border-box",
	    overflow: "hidden",
        width:"355px",
        "&:hover img":{
            transform: "scale(1.1)"
        },
        "& img":{
            verticalAlign: "top",
            maxWidth: "100%",
            transition: "all 0.3s",
            display: "block",
            width: "100%",
            height: "auto",
            transform: "scale(1)",

        },
    },
    imgContainer:{
        marginTop:"20px",
        paddingLeft:"20px !important",
    
    },
    reviewBox:{
        display:"flex",
        flexDirection:"row",
        border: "1px solid #EAEAEC",
        width:"150px",
        gap:"4px",
        padding:"3px",
        borderRadius:"2px",
        cursor:"pointer",
        marginTop:"10px",
        "& *":{
            color: "rgb(83, 87, 102)"
        }
      
    },
    commentIcon:{
        paddingLeft:"20px"
    },
    brandName:{
        fontSize:"24px",
        fontWeight:"bold"
    },
    name:{
        fontSize:"20px"
    },
    price:{
        fontSize:"24px",
        fontWeight:"bold"
    },
    inclusiveTaxes:{
        color:"#03A685",
        fontWeight:"bold"
    },
    sizeBox:{
        display:"flex",
        flexDirection:"row",
        gap:"7px",
        cursor:"pointer",
        marginTop:"20px"
    },
    sellerName:{
        color:"#FF527B",
        fontWeight:"bold",
    },
    deliveryContainer:{
        display:"flex",
        flexDirection: "row",
        gap:"12px"
    },
    deliveryText:{
        fontWeight: "520",
        fontSize: "18px"
    },
    deliveryIcon:{
        color:"rgb(105, 110, 121)",
        paddingTop:"2px"
    },
    deliveryHelperText:{
        fontSize: "13px"
    },
    addToBag:{
        backgroundColor:"#FF527B",
        paddingTop: "50x",
        color:"white",
        width:"320px",
        height:"60px",
        outline:"none",
        border:"none",
        borderRadius:"2px",
        cursor:"pointer",
        fontSize:"24px"
    },
    addWithWishlist:{
        display:"flex",
        gap:"12px"
    },
    selectSizeText:{
        fontWeight:"bold"
    },
    pleaseSelectText:{
        color:"#FF527B"
    },

}))

export default function SingleShirt() {
    const params = useParams();
    const classes = useStyles();
    const dispatch = useDispatch()
    const data = useSelector((state) => state.data);
    const wishlist = useSelector((state) => state.wishlist)
    const item = data.find((item) => item.id == params.id);
    const { brand, reviews, name, images, price, seller, discount,size } = item
    const [selectedSize, setSelectedSize] = useState(0)
    const [ addToBagText, setAddtoBagText ] = useState('ADD TO BAG')


    const handleSize= (item) => {
        setSelectedSize(item)
     
        
    }

    const handleAddtoCart = () => {
        if(selectedSize !== 0 && selectedSize !== -1 ){
            dispatch(addProductToCart({...item, selectedSize}))
            setAddtoBagText('GO TO BAG')
        }else if(selectedSize === 0){
            setSelectedSize(-1)
        }
    }

    const handleWishlist = () => {
        dispatch(addToWishlist(item))
    }

    let wishBtn = wishlist.findIndex(x => x.id == item.id)

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid container item xs={12} sm={6} className={classes.imgContainer}>
                        {images.map((item,i) => 
                        <Grid container key={i} spacing={1} item xs={12} sm={6} >
                            <div className={classes.imgBox} ><img width={355} src={item} alt={brand}/></div>
                        </Grid>
                        )} 
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="body2" className={classes.brandName}>
                        {brand}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className={classes.name}>
                        {name}
                    </Typography>
                    <div className={classes.reviewBox}>
                        <InsertCommentOutlinedIcon className={classes.commentIcon}/>
                        <div>{reviews} Reviews</div>
                    </div>
                    <hr/>
                    <div className="price">
                        <PriceComponent price={price} discount={discount}/>
                    </div>
                    <div className={classes.inclusiveTaxes}>inclusive of all taxes</div>
                    <br/>
                    <Typography variant="p" color="textPrimary" className={classes.selectSizeText}>
                        SELECT SIZE
                    </Typography>
                    {selectedSize === -1 ? <p className={classes.pleaseSelectText}> Please select a size</p> : <></>}
                    <div className={classes.sizeBox}>
                        {size.map((item,i)=>
                            <div key={i} onClick={()=>handleSize(item)} style={{color: selectedSize == item? "#FF527B" : "black", borderColor: selectedSize == item? "#FF527B" : "#CCCDD1"}} className="round">{item}</div>
                        )}
                    </div>
                    <br/>
                    <div className={classes.addWithWishlist}>
                        <button className={classes.addToBag} onClick={handleAddtoCart}>{addToBagText}</button>
                        <WishListBtn wishBtn={wishBtn} handleWishlist={handleWishlist}/>
                    </div>
                    <br/>
                    <div className="price2">
                         <PriceComponent price={price} discount={discount}/>
                    </div>
                    <div>Seller: <span className={classes.sellerName}> {seller}</span></div>
                    <br/>
                    <hr/>
                    <br/>
                    <div className={classes.deliveryContainer}>
                        <div className={classes.deliveryText}>DELIVERY OPTIONS </div>
                        <LocalShippingOutlinedIcon className={classes.deliveryIcon}/>
                    </div>
                    <br/>
                    <div className="buttonIn">
                        <input type="text"  placeholder="Enter a PIN code"/>
                        <button className="checkBtn">CHECK</button>
                    </div>

                    <p className={classes.deliveryHelperText}>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                    
                    <div>
                        <p>100% Original Products</p>
                        <p>Free Delivery on order above Rs. 799</p>
                        <p>Pay on delivery might be available</p>
                        <p>Easy 30 days returns and exchanges</p>
                        <p>Try & Buy might be available</p>
                    </div>
                
                </Grid>
            </Grid>
        </div>
    )
}
