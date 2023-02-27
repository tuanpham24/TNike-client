import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom"; // params url to product detail
import { getProductDetailById } from "../../api/ProductApi";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import '../../App.css'

const BuyButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  '&:hover': {
    backgroundColor: "rgba(0, 0, 0, 0.9)"
  },
}));

const AddCartButton = styled(Button)(({ theme }) => ({
  color: "#000",
  border: "1px solid #000",
  '&:hover': {
    border: "1px solid #000",
  },
}));

export default function ProductDetail() {
  const [productDetail, setProductDetail] = useState({});
  const [value, setValue] = React.useState();
  const { productId } = useParams();

  // handle get product detail
  const handleGetProductDetail = () => {
    getProductDetailById(productId).then(res => setProductDetail(res.data.product))
  }
  useEffect(() => {
    handleGetProductDetail();
  }, []);

  // onclick buy now

  return (
    <Grid
      className="content container product-detail"
      sx={{ flexGrow: 1 }}
    >
      <Grid container spacing={2}>
        {/* photo detail */}
        <Grid item xs={5} className='photo'>
          <img src={productDetail.thumbnail} alt={productDetail.name} />
        </Grid>

        {/* product info */}
        <Grid item xs={7} className="content">
          <h2 className="product-name">{productDetail.name}</h2>
          {/* Rating */}
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
            className="rating"
          >
            <Rating name="read-only" value={value} defaultValue={4.5} precision={0.5} readOnly />
          </Box>
          {/*  */}
          <h3 className="product-price">${productDetail.price}</h3>
          <p>{productDetail.type}</p>
          <p className="product-description">Description: {productDetail.description}</p>

          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Select size</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="38" disabled control={<Radio />} label="38" />
              <FormControlLabel value="39" control={<Radio />} label="39" />
              <FormControlLabel value="40" control={<Radio />} label="40" />
              <FormControlLabel value="41" control={<Radio />} label="41" />
              <FormControlLabel value="42" control={<Radio />} label="42" />
              <FormControlLabel value="43" control={<Radio />} label="43" />
            </RadioGroup>

            <Grid container spacing={2} className="btn-group">
              <Grid item xs={6}>
                <BuyButton
                  fullWidth
                  variant="contained"
                  className="buy-now-btn"
                // onClick={}
                >Buy now</BuyButton>
              </Grid>
              <Grid item xs={6}>
                <AddCartButton
                  fullWidth
                  variant="outlined"
                  className="buy-now-btn"
                // onClick={}
                >Add to cart</AddCartButton>
              </Grid>
            </Grid>
          </FormControl>

        </Grid>
      </Grid>
    </Grid>
  );
}
