import { Typography } from '@mui/material';
import styles from '../styles/Home.module.css';

export default function FarmerHeroPage() {
  // const classes = useStyles();

  return (
    <section className={styles.farmerSection}>
      <div className={styles.farmerHero}>
        <div>
          <div>
            <Typography component="p" variant="p">
              Meet
            </Typography>
            <Typography component="h1" variant="h1">
              Our Farmers
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}
