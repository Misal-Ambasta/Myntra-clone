import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useHistory } from 'react-router-dom';
import PriceComponent from "./PriceComponent";
import SearchIcon from '@material-ui/icons/Search';
import RightSideBar from "./RightSideBar";
import { addToWishlist } from "../redux/action"

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        position:"relative"
    },
    priceContainer: {
        display: 'flex',
        width: "85%",
        justifyContent:"space-between"
    },
    truncate: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      },
      hoverContainer:{
          position: "absolute",
          bottom:"12%",
          height:"15%",
          background:"white",
          width: "100%",
      },
     
      wishlistBtn: {
        display:"flex",
        flexDirection:"row",
        gap:"5px",
        border: "1px solid rgb(105, 110, 121)",
        width:"96%",
        height:"40%",
        margin: "auto",
        textAlign:"center !important",
        padding:"40x 80px",
        cursor:"pointer",
        "& *":{
            marginLeft:"40px"
        }
      },
      sizes:{
          display:"flex",
          flexDirection:"row",
          gap:"5px",
          marginLeft:"3px",
          marginTop:"10px",
      },
      sizeNumber:{
          color:"grey"
      },
      wishlishStyle:{
          marginTop:"5px",
      },
      similar:{
          position:"absolute",
          top:"-50px",
          right:"10px",
          cursor: "pointer",
          backgroundColor: "white",
          borderRadius:"50%"
      }
     
});

export default function ShirtCard({ data }) {
    const classes = useStyles();
    const { images, brand, name, size, discount, price,id } = data;
    const dataAll = useSelector(state => state.data)
    const wishlist = useSelector((state) => state.wishlist)
    const [ hoverActive, setHoverActive ] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()
    const [similarActive, setSimilarActive] = useState('')


    const handleHoverEnter = () => {
        setHoverActive(true)
    }

    const handleHoverLeave = () => {
        setHoverActive(false)
    }

    const handleShirtDetails = () => {
            history.push(`shirts/${id}`)
    }
    
    const handleSimilar = () => {
        setSimilarActive(brand)
        console.log(similarActive)
    }

    const handleWishlist = () => {
        dispatch(addToWishlist(data))
    }

    let wishBtn = wishlist.findIndex(x => x.id == data.id)

    let similarData = dataAll.filter(x => x.brand == similarActive)
    console.log(similarData)
    return (
        <Card onMouseEnter={ handleHoverEnter } onMouseLeave={ handleHoverLeave } className={classes.root} >
            <CardActionArea>
                <CardMedia onClick={()=>handleShirtDetails()} component="img" alt="Contemplative Reptile" height="400" width="100" image={images[0]} title="Contemplative Reptile" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {brand}
                    </Typography>
                    <Typography className={classes.truncate} variant="body2" color="textSecondary" component="p">
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardContent>
               <PriceComponent price={price} discount={discount} />
            </CardContent>
            { hoverActive && <div className={classes.hoverContainer}>
                <SearchIcon className={classes.similar} name={"Similar Products"} onClick={()=>handleSimilar()} />
                <div className={classes.wishlistBtn} onClick={handleWishlist} style={{backgroundColor: wishBtn === -1? "white": "#535766"}}>                     
                    <FavoriteBorderIcon style={{color: wishBtn === -1? "grey": "#FF527B"}} className={classes.wishlishStyle} /> 
                    <div style={{color: wishBtn === -1? "#535766": "white"}} className={classes.wishlishStyle}>{wishBtn === -1 ? "WISHLIST": "WISHLISTED" }</div>                  
                </div>
                <div className={classes.sizes}>
                    <div>Sizes:</div>
                    <div className={classes.sizeNumber}>{size.join(", ")}</div>
                </div>
            </div>}
        </Card>
    );
}
