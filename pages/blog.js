import { Box } from '@mui/system';
import React from 'react';
import Layout from '../components/Layout';
// import useStyles from '../utils/styles';
import classes from '../utils/classes';

export default function Blog() {
  return (
    <Layout title="Blog">
      <section>
        <Box sx={classes.allPagesPadding}>
          <h1>About me page here</h1>
        </Box>
      </section>
    </Layout>
  );
}
