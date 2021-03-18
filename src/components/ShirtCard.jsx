import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useHistory } from 'react-router-dom'

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
      actualPrice:{
          color: "grey",
          textDecoration:"line-through"
      },
      discount:{
          color:"#FF905A"
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
      }
     
});

export default function ShirtCard({ data }) {
    const classes = useStyles();
    const { images, brand, name, size, discount, price,id } = data;
    const [ hoverActive, setHoverActive ] = useState(false)
    const history = useHistory()

    const discountPrice = () => {
        return Math.round(Number(price) * (100 - Number(discount)) / 100);
    };

    const handleHoverEnter = () => {
        setHoverActive(true)
    }

    const handleHoverLeave = () => {
        setHoverActive(false)
    }

    const handleShirtDetails = () => {
        console.log(id)
        history.push(`shirts/${id}`)
    }

    return (
        <Card onMouseEnter={ handleHoverEnter } onMouseLeave={ handleHoverLeave } className={classes.root} onClick={()=>handleShirtDetails()}>
            <CardActionArea>
                <CardMedia component="img" alt="Contemplative Reptile" height="400" width="100" image={images[0]} title="Contemplative Reptile" />
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
                <div className={classes.priceContainer}>
                    <Typography gutterBottom variant="body2" component="p">
                        Rs. {discountPrice()}
                    </Typography>
                    <Typography className={classes.actualPrice}  variant="body2" color="textSecondary" component="p">
                        Rs {price}
                       
                    </Typography>
                    <Typography className={classes.discount} variant="body2" color="textSecondary" component="p">
                        {discount}% OFF
                    </Typography>
                </div>
            </CardContent>

            { hoverActive && <div className={classes.hoverContainer}>
                <div className={classes.wishlistBtn}> 
                    
                    <FavoriteBorderIcon className={classes.wishlishStyle} style={{ color: 'rgb(105, 110, 121)'}} /> 
                    <div className={classes.wishlishStyle}>Wishlist</div>
                   
                </div>
                <div className={classes.sizes}>
                    <div>Sizes:</div>
                    <div className={classes.sizeNumber}>{size.join(", ")}</div>
                </div>
            </div>}
        </Card>
    );
}
