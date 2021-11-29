import CancelIcon from '@mui/icons-material/Cancel';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  Link,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import footerLogo from '../public/images/logos/footer-logo.png';
import headerLogo from '../public/images/logos/header-logo.png';
import styles from '../styles/NewUpgradedStyles.module.css';
import classes from '../utils/classes';
import { getError } from '../utils/error';

export default function Header() {
  // Using the classes and styles from Material UI
  /* const classes = useStyles(); */

  const router = useRouter();

  // function that handles the user profile menu show and hide
  // first define state for the anchor element according to material ui documentary
  const [anchorEl, setAnchorEl] = useState(null);

  // define and set the function that shows the menu
  const loginClickHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // define and set the function that hides the menu
  const loginMenuCloseHandler = (event, redirect) => {
    setAnchorEl(null);

    if (redirect !== 'backdropClick') {
      router.push(redirect);
    }
  };

  // change navbar background color on scroll
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window === undefined) {
        return;
      } else {
        if (window.scrollY >= 50) {
          setNavbar(true);
        } else {
          setNavbar(false);
        }
      }
    };

    changeBackground();

    window.addEventListener('scroll', changeBackground);
  }, [navbar]);

  // ###############################################################
  // search sidebar implementation
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // function that handles opening of the category search side bar
  const sidebarOpenHandler = () => {
    setSidebarVisible(true);
  };

  // function that handles closing of the category search side bar
  const sidebarCloseHandler = () => {
    setSidebarVisible(false);
  };

  // state variable for the categories
  const [categories, setCategories] = useState([]);

  const { enqueueSnackbar } = useSnackbar();

  // api request to get the categories from the backend
  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`/api/products/categories`);
      setCategories(data);
    } catch (error) {
      enqueueSnackbar(getError(error), { variant: 'error' });
    }
  };

  // Implement the Search functionality
  const [query, setQuery] = useState('');

  const queryChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  // function that handles the search function from the search input
  const formSubmitHandler = (event) => {
    event.preventDefault();

    router.push(`/search?query=${query}`);
  };

  useEffect(() => {
    fetchCategories();

    // have to check if this causes an error => infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isDesktop = useMediaQuery('(min-width: 600px)');

  return (
    <header
      className={navbar ? styles.onScrollClassName : styles.lowerNavigation}
    >
      <nav className={styles.navMenu}>
        {/* Side bar implementation started */}
        <Box>
          {' '}
          {/* from div to box */}
          <Box display="flex" alignItems="center">
            <IconButton
              edge="start"
              aria-label="open drawer"
              onClick={sidebarOpenHandler}
              xs={classes.menuButton}
            >
              <MenuIcon
                sx={
                  navbar
                    ? classes.navbarButtonOnScroll
                    : classes.sideNavbarButton
                }
              />
            </IconButton>

            <div className={styles.logo}>
              {navbar ? (
                <NextLink href="/" passHref>
                  <Link>
                    <Image src={footerLogo} alt="Pure Farm Logo"></Image>
                  </Link>
                </NextLink>
              ) : (
                <NextLink href="/" passHref>
                  <Link>
                    <Image src={headerLogo} alt="Pure Farm Logo"></Image>
                  </Link>
                </NextLink>
              )}
            </div>
          </Box>
          <Drawer
            anchor="left"
            open={sidebarVisible}
            onClose={sidebarCloseHandler}
          >
            <List>
              <ListItem>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography>Search Products By Category</Typography>
                  <IconButton
                    aria-label="search side bar close"
                    onClick={sidebarCloseHandler}
                  >
                    <CancelIcon />
                  </IconButton>
                </Box>
              </ListItem>

              <Divider light />

              {categories.map((category) => (
                <NextLink
                  key={category}
                  href={`/search?category=${category}`}
                  passHref
                >
                  <ListItem button component="a" onClick={sidebarCloseHandler}>
                    <ListItemText primary={category}></ListItemText>
                  </ListItem>
                </NextLink>
              ))}
            </List>
          </Drawer>
        </Box>

        <Box sx={isDesktop ? classes.visible : classes.hidden}>
          {/*           <form onSubmit={formSubmitHandler} className={classes.searchForm}>
            <InputBase
              name="query"
              className={classes.searchInput}
              placeholder="Search"
              onChange={queryChangeHandler}
            />

            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </form> */}

          <form onSubmit={formSubmitHandler}>
            <Box sx={classes.searchForm}>
              <InputBase
                name="query"
                sx={classes.searchInput}
                placeholder="Search products"
                onChange={queryChangeHandler}
              />
              <IconButton
                type="submit"
                sx={classes.searchButton}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Box>
          </form>
        </Box>

        <Box sx={classes.navbarButtons}>
          <NextLink href="/" passHref>
            <Link>
              <Typography variant="h2" component="h2" selected>
                HOME
              </Typography>
            </Link>
          </NextLink>

          <NextLink href="/farmers" passHref>
            <Link>
              <Typography variant="h2" component="h2">
                FARMERS
              </Typography>
            </Link>
          </NextLink>

          <NextLink href="/market" passHref>
            <Link>
              <Typography variant="h2" component="h2">
                MARKETS
              </Typography>
            </Link>
          </NextLink>

          <NextLink href="/about" passHref>
            <Link>
              <Typography variant="h2" component="h2">
                ABOUT US
              </Typography>
            </Link>
          </NextLink>

          <NextLink href="/contact" passHref>
            <Link>
              <Typography variant="h2" component="h2">
                CONTACT US
              </Typography>
            </Link>
          </NextLink>

          <NextLink href="/blog" passHref>
            <Link>
              <Typography variant="h2" component="h2">
                BLOG
              </Typography>
            </Link>
          </NextLink>
        </Box>
      </nav>

      <Box sx={classes.mobileDisplayNav}>
        {/* Side bar implementation started */}
        <Box sx={classes.mobileSidebar}>
          <Box display="flex" alignItems="center">
            <IconButton
              edge="start"
              aria-label="open drawer"
              onClick={sidebarOpenHandler}
            >
              <MenuIcon
                sx={
                  navbar
                    ? classes.navbarButtonOnScroll
                    : classes.sideNavbarButton
                }
              />
            </IconButton>
          </Box>

          <Drawer
            anchor="left"
            open={sidebarVisible}
            onClose={sidebarCloseHandler}
          >
            <List>
              <ListItem>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography>Search Products By Category</Typography>
                  <IconButton
                    aria-label="search side bar close"
                    onClick={sidebarCloseHandler}
                  >
                    <CancelIcon />
                  </IconButton>
                </Box>
              </ListItem>

              <Divider light />

              {categories.map((category) => (
                <NextLink
                  key={category}
                  href={`/search?category=${category}`}
                  passHref
                >
                  <ListItem button component="a" onClick={sidebarCloseHandler}>
                    <ListItemText primary={category}></ListItemText>
                  </ListItem>
                </NextLink>
              ))}
            </List>
          </Drawer>
        </Box>

        {navbar ? (
          <Box sx={classes.mobileLogo}>
            <NextLink href="/" passHref>
              <Link>
                <Image src={footerLogo} alt="Pure Farm Logo"></Image>
              </Link>
            </NextLink>
          </Box>
        ) : (
          <Box sx={classes.mobileLogo}>
            <NextLink href="/" passHref>
              <Link>
                <Image src={headerLogo} alt="Pure Farm Logo"></Image>
              </Link>
            </NextLink>
          </Box>
        )}

        <Box sx={classes.hamburgerMenuContainer}>
          {navbar ? (
            <Button
              component="button"
              aria-controls="simple-Menu"
              aria-haspopup="true"
              onClick={loginClickHandler}
            >
              <MenuIcon
                sx={
                  navbar
                    ? classes.navbarButtonOnScroll
                    : classes.sideNavbarButton
                }
              />
            </Button>
          ) : (
            <Button
              component="button"
              aria-controls="simple-Menu"
              aria-haspopup="true"
              onClick={loginClickHandler}
            >
              <MenuIcon
                sx={
                  navbar
                    ? classes.navbarButtonOnScroll
                    : classes.sideNavbarButton
                }
              />
            </Button>
          )}

          <Menu
            /* sx={classes.hamburgerMenuBox} */
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={loginMenuCloseHandler}
          >
            <MenuItem
              sx={classes.hamburgerMenuItem}
              onClick={loginMenuCloseHandler}
            >
              <Box sx={classes.closeHamburgerMenuImage}>
                <CancelIcon sx={classes.closeMobileMenu} />
              </Box>
            </MenuItem>

            <MenuItem
              sx={classes.hamburgerMenuItem}
              onClick={(event) => loginMenuCloseHandler(event, '/farmers')}
            >
              <Typography component="p" variant="p">
                FARMERS
              </Typography>
            </MenuItem>

            <MenuItem
              sx={classes.hamburgerMenuItem}
              onClick={(event) => loginMenuCloseHandler(event, '/market')}
            >
              <Typography component="p" variant="p">
                MARKET
              </Typography>
            </MenuItem>

            <MenuItem
              sx={classes.hamburgerMenuItem}
              onClick={(event) => loginMenuCloseHandler(event, '/about')}
            >
              <Typography component="p" variant="p">
                ABOUT US
              </Typography>
            </MenuItem>

            <MenuItem
              sx={classes.hamburgerMenuItem}
              onClick={(event) => loginMenuCloseHandler(event, '/contact')}
            >
              <Typography component="p" variant="p">
                CONTACT US
              </Typography>
            </MenuItem>

            <MenuItem
              sx={classes.hamburgerMenuItem}
              onClick={(event) => loginMenuCloseHandler(event, '/blog')}
            >
              <Typography component="p" variant="p">
                BLOG
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </header>
  );
}
