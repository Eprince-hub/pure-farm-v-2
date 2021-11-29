import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import Rating from '@mui/material/Rating';
import NextLink from 'next/link';
import React from 'react';
import classes from '../utils/classes';

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <section>
      <Box sx={classes.searchProductDisplayContainer}>
        <Card raised style={{ height: '100%' }}>
          <NextLink href={`/product/${product.slug}`} passHref>
            <CardActionArea>
              <CardMedia
                component="img"
                image={product.image}
                title={product.name}
              ></CardMedia>
              <CardContent>
                <Typography>
                  <strong>{product.name}</strong>
                </Typography>

                <Rating value={Number(product.rating)} readOnly></Rating>
              </CardContent>
            </CardActionArea>
          </NextLink>

          <Typography variant="h4" component="h4">
            €<strong>{product.price}</strong>
          </Typography>

          <CardActions>
            <Button
              sx={classes.productPageButton}
              size="small"
              color="primary"
              onClick={() => addToCartHandler(product)}
            >
              Collect Box
            </Button>
          </CardActions>
        </Card>
      </Box>
    </section>
  );
}
