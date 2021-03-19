import React from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { deleteFromCart, deleteFromWishlist } from "../redux/action";
import CartCard from "./CartCard";
import {discountPrice} from "./PriceComponent"

const useStyles = makeStyles({
  list: {
    width: 750,
  },
  fullList: {
    width: 'auto',
  },
  bagText:{
    color:"black",
    fontSize: '10px',
    fontWeight: 'bold'
  },
  totalPrice:{
    margin:"auto",
    width:"240px",
    paddingBottom:"30px"
  }
});

export default function TemporaryDrawer({name, data}) {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const [state, setState] = React.useState({
    right: false,
  });
  const [totalPrice, setTotalPrice] = React.useState(0)

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleDeleteCart = (id) => {
    if(name == 'Bag'){
      dispatch(deleteFromCart(id))
    }else if(name =='Wishlist'){
      dispatch(deleteFromWishlist(id))
    }
  }

  const handleTotalPrice = () => {
    let sum = 0
    if(data.length !== 0){
      for(let i=0; i<data.length; i++){
        sum += Number(discountPrice(data[i].price, data[i].discount))
      }
    }
    
    return sum
  }
  const list = (anchor) => (
    
    <div>

      {data && data.map((text, index) => (
        <CartCard data={text} cardName={name} handleDelete={handleDeleteCart}/>
      ))}
      {name === 'Bag'? handleTotalPrice() == 0 ? <h2>Add Something in bag</h2>:
        <h4 className={classes.totalPrice}>Total Price: Rs.<span> {data && handleTotalPrice()} </span></h4>:<></>
      }
    </div>
   
  );


  return (
    <div>
      {[name].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className={classes.bagText} onClick={toggleDrawer(anchor, true)}>{anchor}</div>
          <Drawer anchor='right' open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}