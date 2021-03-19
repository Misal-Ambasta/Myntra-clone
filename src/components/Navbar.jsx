import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { useSelector } from 'react-redux';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { useDispatch } from 'react-redux';
import { getAllShirts } from '../redux/action';
import RightSideBar from "./RightSideBar";
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
       
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 0.2,
        display: 'none',
        color: 'black',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    },
    iconTitle: {
        color: 'black',
        display: 'block',
        fontSize: '10px',
        fontWeight: 'bold'
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('lg')]: {
            marginLeft: theme.spacing(3),
            width: '500px'
        }
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputRoot: {
        color: 'rgb(105, 110, 121)',
        border: '1px solid rgb(105, 110, 121)',
        borderRadius: '2px'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '500px'
        }
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    iconColor:{
        color: 'rgb(105, 110, 121)'
    },
    appBarStyle:{
        background: '#fff'
    },
    home:{
        cursor:"pointer"
    },
    myntraIcon:{
        paddingTop:"10px"
    },
    wishListIcon:{
        width:"25px"
    },
    profileIcon:{

    }
}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const [ anchorEl, setAnchorEl ] = React.useState(null);
    const [ mobileMoreAnchorEl, setMobileMoreAnchorEl ] = React.useState(null);
    const dispatch = useDispatch();
    const history = useHistory()
    const cart = useSelector((state) => state.cart);
    const wishlist = useSelector((state) => state.wishlist);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleSearch = (e) => {
        if(e.keyCode == 13){
            dispatch(getAllShirts(`q=${e.target.value}`));
        }
    }

    const handleHome = () => {
        history.push(`/`)
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={menuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMenuOpen} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
            <MenuItem>
                <IconButton aria-label="show wishlist" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                    <PersonOutlineIcon className={classes.iconColor} />
                    </Badge>
                </IconButton>
                <p>Profile</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show cart" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                    <FavoriteBorderIcon className={classes.iconColor} />
                    </Badge>
                </IconButton>
                <RightSideBar name={"Wishlist"} data={wishlist}/>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton aria-label="account of current user" aria-controls="primary-search-account-menu" aria-haspopup="true" color="inherit">
                     <LocalMallIcon className={classes.iconColor} />
                </IconButton>
                <RightSideBar name={"Bag"} data={cart}/>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar className={`${classes.appBarStyle} ${classes.home}`} position="static">
                <Toolbar>
                    <div onClick={handleHome} className={classes.myntraIcon}>
                        <img width="100px" src="https://images.indianexpress.com/2021/01/myntra.png" alt="mytra icon" />
                    </div>
                    <Typography onClick={handleHome} className={classes.title} variant="p" noWrap>
                        MEN
                    </Typography>
                    <Typography className={classes.title} variant="p" noWrap>
                        WOMEN
                    </Typography>
                    <Typography className={classes.title} variant="p" noWrap>
                        KIDS
                    </Typography>
                    <Typography className={classes.title} variant="p" noWrap>
                        HOME & LIVING
                    </Typography>
                    <Typography className={classes.title} variant="p" noWrap>
                        OFFERS
                    </Typography>

                    <div className={classes.search}>
                        <div  className={classes.searchIcon}>
                            <SearchIcon className={`${classes.iconColor}`}  />
                        </div>
                        <InputBase
                            placeholder="Search for products, brands, and more"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                                fullWidth: "true"
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            onKeyDown={handleSearch}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton edge="end" aria-label="account of current user" color="inherit">
                            <div className={classes.iconContainer}>
                                <PersonOutlineIcon className={classes.iconColor} fontSize="medium"/>
                                <Typography className={classes.iconTitle} variant="div" noWrap>
                                    Profile
                                </Typography>
                            </div>
                        </IconButton>
                        <IconButton aria-label="show wishlist" color="inherit" >
                            <div className={`${classes.iconContainer} ${classes.wishListIcon}`}>
                                <Badge badgeContent={wishlist.length} color="secondary">
                                    <FavoriteBorderIcon className={classes.iconColor} />
                                </Badge>
                                <RightSideBar name={"Wishlist"} data={wishlist}/>
                            </div>
                        </IconButton>

                        <IconButton aria-label="show cart" color="inherit" >
                            <div className={classes.iconContainer}>
                                <Badge badgeContent={cart.length} color="secondary">
                                    <LocalMallIcon className={classes.iconColor} />
                                </Badge>
                                <RightSideBar name={"Bag"} data={cart}/>
                            </div>
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
                            <MoreIcon className={classes.iconColor} />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}
