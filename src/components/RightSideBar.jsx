import React from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import {deleteFromCart} from "../redux/action"

const useStyles = makeStyles({
  list: {
    width: 350,
  },
  fullList: {
    width: 'auto',
  },
  bagText:{
    color:"black",
    fontSize: '10px',
    fontWeight: 'bold'
  }
});

export default function TemporaryDrawer({name, data}) {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const [state, setState] = React.useState({
    right: false,
  });
  console.log(data)
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleDeleteCart = (id) => {
    dispatch(deleteFromCart(id))
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {data && data.map((text, index) => (
          <ListItem button key={text.brand}>
            <ListItemText primary={text.brand} />
            <ListItemText primary={text.selectedSize} />
            <ListItemIcon onClick={()=>handleDeleteCart(text.id)}><DeleteIcon/></ListItemIcon>
          </ListItem>
        ))}
      </List>
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