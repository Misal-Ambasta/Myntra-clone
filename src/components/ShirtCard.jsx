import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        position:"relative"
    },
    priceContainer: {
        display: 'flex',
        width: "65%",
        justifyContent:"space-between"
    },
    truncate: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      },
      hoverContainer:{
          position: "absolute",
          bottom:"10%",
          height:"20%",
          background:"white",
          width: "100%"
      }
});

export default function ShirtCard({ data }) {
    const classes = useStyles();
    const { images, brand, name, size, discount, price } = data;
    const [ hoverActive, setHoverActive ] = useState(false)

    const discountPrice = () => {
        return Math.round(Number(price) * (100 - Number(discount)) / 100);
    };

    const handleHoverEnter = () => {
        setHoverActive(true)
    }

    const handleHoverLeave = () => {
        setHoverActive(false)
    }

    return (
        <Card onMouseEnter={ handleHoverEnter } onMouseLeave={ handleHoverLeave } className={classes.root}>
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
                    <Typography variant="body2" color="textSecondary" component="p">
                        {price}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {discount} % OFF
                    </Typography>
                </div>
            </CardContent>

            { hoverActive && <div className={classes.hoverContainer}>
                <button>Wishlist</button>
                <div>Size: {size.join(",")}</div>
            </div>}
        </Card>
    );
}
