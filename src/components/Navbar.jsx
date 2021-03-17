import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
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

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1
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
    }
}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const [ anchorEl, setAnchorEl ] = React.useState(null);
    const [ mobileMoreAnchorEl, setMobileMoreAnchorEl ] = React.useState(null);

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
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton aria-label="account of current user" aria-controls="primary-search-account-menu" aria-haspopup="true" color="inherit">
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar style={{ background: '#fff' }} position="static">
                <Toolbar>
                    <div>
                        <img width="100px" src="https://images.indianexpress.com/2021/01/myntra.png" alt="mytra icon" />
                    </div>
                    <Typography className={classes.title} variant="p" noWrap>
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
                        <div className={classes.searchIcon}>
                            <SearchIcon style={{ color: 'rgb(105, 110, 121)' }} />
                        </div>
                        <InputBase
                            placeholder="Search for products, brands, and more"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                                fullWidth: true
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton edge="end" aria-label="account of current user" color="inherit">
                            <div className={classes.iconContainer}>
                                <PersonOutlineIcon style={{ color: 'rgb(105, 110, 121)' }} />
                                <Typography className={classes.iconTitle} variant="div" noWrap>
                                    Profile
                                </Typography>
                            </div>
                        </IconButton>
                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <div className={classes.iconContainer}>
                                <Badge color="secondary">
                                    <FavoriteBorderIcon style={{ color: 'rgb(105, 110, 121)' }} />
                                </Badge>
                                <Typography className={classes.iconTitle} variant="div" noWrap>
                                    Wishlist
                                </Typography>
                            </div>
                        </IconButton>

                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <div className={classes.iconContainer}>
                                <Badge badgeContent={17} color="secondary">
                                    <LocalMallIcon style={{ color: 'rgb(105, 110, 121)' }} />
                                </Badge>
                                <Typography className={classes.iconTitle} variant="div" noWrap>
                                    Bag
                                </Typography>
                            </div>
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
                            <MoreIcon style={{ color: 'rgb(105, 110, 121)' }} />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}