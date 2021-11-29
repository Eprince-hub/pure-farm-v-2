import React from 'react';
import ContactPageHero from '../components/ContactPageHero';
import Layout from '../components/Layout';
// import useStyles from '../utils/styles';
import classes from '../utils/classes';

export default function Contact() {
  // const classes = useStyles();
  return (
    <Layout title="Contact Us">
      <section>
        <ContactPageHero />
      </section>
    </Layout>
  );
}

// checked for latest mui
