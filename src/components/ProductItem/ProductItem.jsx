import React from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import '../../assets/css/product.css'

// icon config
library.add(faArrowRight)

export default function ProductItem({ product }) {
  return (
    <Card
      sx={{ maxWidth: 500 }}
      className="card-item"
    // onClick={}
    >
      <Link className="detail-btn" to={'/product/' + product._id}>
        <div className="card-detail"><button className="detail-btn">See more... <FontAwesomeIcon icon={faArrowRight} /></button></div>
        <CardMedia
          className="card-thumbnail"
          sx={{ height: 250 }}
          image={product.thumbnail}
          title="green iguana"
        />
        <CardContent className="card-content">
          <Typography gutterBottom variant="h6" component="div" className="text-overflow">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="text-overflow">
            {product.description}
          </Typography>
        </CardContent>
      </Link>
      <CardActions className="card-actions">
        <Button className="card-btn" size="small">Add cart</Button>
        <Button className="card-btn" size="small">Buy now</Button>
      </CardActions>
    </Card>
  );
}