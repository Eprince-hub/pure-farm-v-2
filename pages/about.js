import { Box } from '@mui/system';
import React from 'react';
import Layout from '../components/Layout';
// import useStyles from '../utils/styles';
import classes from '../utils/classes';

export default function About() {
  // const classes = useStyles();
  return (
    <Layout title="About Us">
      <section>
        <Box sx={classes.allPagesPadding}>
          <h1>About me page here</h1>
        </Box>
      </section>
    </Layout>
  );
}
