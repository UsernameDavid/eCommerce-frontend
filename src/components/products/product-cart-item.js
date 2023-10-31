import React, { Component }  from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { DeleteOutline } from '@material-ui/icons';

export default class ProductItem extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { category, description, id, image, name, price } = this.props;
    return (
      <Card className= "card-cart">
        
        <CardHeader className='card-header'
          subheader={this.props.name}
        />

        <div className="img-text-wrapper">
          <div className="img-wrapper">
          <CardMedia className="card-image"
              component="img"
              image={this.props.image}
              alt={this.props.name}
            />
          </div>
          <div className="img-description-wrapper">
            <div className="img-description">
            {this.props.description}
            </div>
          </div>
        </div>

        <CardActions className='card-actions' disableSpacing>
          {
            <Typography 
            variant = 'h7'
            style={{ color: '#DA5726' }}>
            {this.props.price}€
            </Typography>
          }
          <IconButton aria-label="remove from cart">
            <DeleteOutline />
          </IconButton>
        </CardActions>

      </Card>
    );
  }
}