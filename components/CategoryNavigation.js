import { Box, Grid, Link, Typography } from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react';
import diaryProducts from '../public/images/diary-products.png';
import fruitsAndVegetables from '../public/images/fruits-vegetable.png';
import grainsAndNuts from '../public/images/grains-nuts.png';
import meatAndSeafood from '../public/images/sea-food.png';
import styles from '../styles/Home.module.css';
// import useStyles from '../../utils/styles';
import classes from '../utils/classes';

export default function CategoryNavigation() {
  // const classes = useStyles();

  return (
    <section className={styles.categorySection}>
      <Grid container spacing={3}>
        <Grid item md={3} xs={12}>
          <NextLink href="/market" passHref>
            <Link>
              <Box sx={classes.categorySectionHeader}>
                <Typography variant="h2" component="h2">
                  Fruits & Vegetables
                </Typography>

                <div>
                  <Image
                    src={fruitsAndVegetables}
                    alt="Pure Farm Fruits and Vegetable box"
                  ></Image>
                </div>
              </Box>
            </Link>
          </NextLink>
        </Grid>

        <Grid item md={3} xs={12}>
          <NextLink href="/market" passHref>
            <Link>
              <Box sx={classes.categorySectionHeader}>
                <Typography variant="h2" component="h2">
                  Grains & Nuts
                </Typography>

                <div>
                  <Image
                    src={grainsAndNuts}
                    alt="Pure Farm Grains and Nuts box"
                  ></Image>
                </div>
              </Box>
            </Link>
          </NextLink>
        </Grid>

        <Grid item md={3} xs={12}>
          <NextLink href="/market" passHref>
            <Link>
              <Box sx={classes.categorySectionHeader}>
                <Typography variant="h2" component="h2">
                  Meat & Seafood
                </Typography>

                <div>
                  <Image
                    src={meatAndSeafood}
                    alt="Pure Farm Meat and Seafood box"
                  ></Image>
                </div>
              </Box>
            </Link>
          </NextLink>
        </Grid>

        <Grid item md={3} xs={12}>
          <NextLink href="/market" passHref>
            <Link>
              <Box sx={classes.categorySectionHeader}>
                <Typography variant="h2" component="h2">
                  Diary Products
                </Typography>

                <div>
                  <Image
                    src={diaryProducts}
                    alt="Pure Farm Diary Products box"
                  ></Image>
                </div>
              </Box>
            </Link>
          </NextLink>
        </Grid>
      </Grid>
    </section>
  );
}
