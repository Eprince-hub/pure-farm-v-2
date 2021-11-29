import { Box, Grid, Link, Typography } from '@mui/material';
import NextLink from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
// import useStyles from '../utils/styles';
import classes from '../utils/classes';

export default function RegisterType() {
  // const classes = useStyles();
  return (
    <Layout title="Registration Type">
      <Box sx={classes.allPagesPadding}>
        <section>
          <Box sx={classes.chooseRegistration}>
            <Grid container spacing={6} variant="grid">
              <Grid item md={6} xs={12}>
                <NextLink href="/register" passHref>
                  <Link>
                    <Typography variant="h2" component="h2">
                      Register As Customer
                    </Typography>
                  </Link>
                </NextLink>
              </Grid>

              <Grid item md={6} xs={12}>
                <NextLink href="/farmer-register" passHref>
                  <Link>
                    <Typography variant="h2" component="h2">
                      Register As Farmer
                    </Typography>
                  </Link>
                </NextLink>
              </Grid>
            </Grid>
          </Box>
        </section>
      </Box>
    </Layout>
  );
}
