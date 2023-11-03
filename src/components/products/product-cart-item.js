import React, { Component }  from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { DeleteOutline } from '@material-ui/icons';
import { Badge } from '@material-ui/core';

export default class ProductCartItem extends Component {
  constructor(props) {
    super(props);


    this.state = {
      totalItems: 0
    }

    this.getTotalofSingleProduct = this.getTotalofSingleProduct.bind(this);
    this.removeFromMyCart = this.removeFromMyCart.bind(this);
  }

  removeFromMyCart(item) {
    this.props.removefromcart(item);
  }

  getTotalofSingleProduct(){
      this.props.myCart.map(item => {
        if (item.id === this.props.id) {
          this.state.totalItems += 1
        }
      })
  }

  render() {
    const { category, description, id, image, name, price, myCart} = this.props;
    this.getTotalofSingleProduct()
    return (
      <Card className= "card-cart">
        <CardHeader className='card-header'
        subheader={
          <Badge className='badge-cart-card' badgeContent={this.state.totalItems}>
          {this.props.name}
          </Badge>
        }
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
            style={{ color: '#DA5726' }}>
            {this.props.price} €/u.
            </Typography>
          }
          <IconButton aria-label="remove from cart">
            <DeleteOutline onMouseDown={() => {
              this.removeFromMyCart(this.props);
            }
          }
            />
          </IconButton>
        </CardActions>

      </Card>
    );
  }
}