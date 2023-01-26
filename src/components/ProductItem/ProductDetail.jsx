import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // params url to product detail
import { getProductDetailById } from "../../api/ProductApi";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import '../../App.css'

export default function ProductDetail() {
  const [productDetail, setProductDetail] = useState({});
  const { productId } = useParams();

  // handle get product detail
  const handleGetProductDetail = () => {
    getProductDetailById(productId).then(res => setProductDetail(res.data.product))
  }
  useEffect(() => {
    handleGetProductDetail();
  }, []);
  return (
    <Grid
      className="content container product-detail"
      sx={{ flexGrow: 1 }}
    >
      <Grid container spacing={2}>
        {/* photo detail */}
        <Grid item xs={6} className='photo'>
          <img src={productDetail.thumbnail} alt={productDetail.name} />
        </Grid>

        {/* product info */}
        <Grid item xs={6}>
          <h2 className="product-name">{productDetail.name}</h2>
          <p>Type: {productDetail.type}</p>
          <p>Description: {productDetail.description}</p>

          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Select size</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="38"
                disabled
                control={<Radio />}
                label="38"
              />
              <FormControlLabel value="39" control={<Radio />} label="39" />
              <FormControlLabel value="40" control={<Radio />} label="40" />
              <FormControlLabel value="41" control={<Radio />} label="41" />
              <FormControlLabel value="42" control={<Radio />} label="42" />
              <FormControlLabel value="43" control={<Radio />} label="43" />
            </RadioGroup>
          </FormControl>


        </Grid>
      </Grid>

    </Grid>
  );
}
