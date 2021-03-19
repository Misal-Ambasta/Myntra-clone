import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import PriceComponent from "./PriceComponent";
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles({
    root: {
        maxWidth: 250,
        position:"relative",
        margin:"20px",
        border:"1px solid grey"
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
     
});

export default function CartCard({ data, handleDelete, cardName, sum }) {
    const classes = useStyles();
    const { images, brand, name, discount, price,id } = data;
    const history = useHistory()

    const handleShirtDetails = () => {
            history.push(`shirts/${id}`)
    }


    return (
        <Card className={classes.root} >
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
               <DeleteIcon onClick={()=>handleDelete(id)}/>
            </CardContent>
        </Card>
    );
}
