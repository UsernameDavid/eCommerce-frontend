import React, { Component }  from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import { AddShoppingCart } from '@material-ui/icons';

export default class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardHovered: false,
      //myCart: this.props.myCart,
      productIdArray: []
    };

    this.addToMyCart = this.addToMyCart.bind(this);
  }
  

  addToMyCart(item) {
    this.props.addtocart(item);
    console.log("add to cart", this.props.myCart);
  }

  render() {
    const { category, description, id, image, name, price, myCart } = this.props;
    return (
        <Card className={this.state.cardHovered ? "card-hovered" : "card"}
        onMouseEnter={() => this.setState({ cardHovered: true })}
        onMouseLeave={() => this.setState({ cardHovered: false })}>
          
          <CardHeader className='card-header'
            action={
              <Typography 
              style={{ color: '#DA5726' }}>
              {this.props.price} €
              </Typography>
            }
          />

          <CardContent>
            <Typography style={{ color: 'rgba(0, 0, 0, 0.87)',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              fontSize: '1.2rem' }}>
              {this.props.name}
            </Typography>
          </CardContent>
          
          <div className="img-text-wrapper">
            <div className="img-wrapper">
              <CardMedia className="card-image"
                component="img"
                image={this.props.image}
                alt={this.props.name}
              />
            </div>
            <div className={this.state.cardHovered ? "img-description-wrapper text-hovered" : "img-description-wrapper"}>
              {this.props.description}
            </div>
          </div>

          <CardContent>
            <Typography variant="body2" style={{ color: 'gray' }}>
            {this.props.category}
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton aria-label="add to cart">
              <AddShoppingCart onClick={() => this.addToMyCart(this.props)}/>
            </IconButton>
            <IconButton aria-label="share this product">
              <ShareIcon />
            </IconButton>
          </CardActions>
          
        </Card>
        
    );
  }
}