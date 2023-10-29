import React, { Component }  from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { AddShoppingCart } from '@material-ui/icons';

export default class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false,
      texthovered: false,
      price: this.props.price
    };
  }

  render() {
    const { category, description, id, image, name, price } = this.props;
    return (
      <Card sx={{ maxWidth: 100 }}>
        <CardHeader
          action={
            <Typography 
            variant = 'h6'
            style={{ color: '#ff9800' }}>
            {this.props.price}
            </Typography>
          }
          title={this.props.name}
          subheader={this.props.category}
        />
        <div className="img-text-wrapper">
          <div className="img-wrapper">
            <CardMedia className={this.state.hovered ? "card-image hovered" : "card-image"}
              onMouseEnter={() => this.setState({ hovered: true })}
              onMouseLeave={() => this.setState({ hovered: false })}
              component="img"
              height="194"
              image={this.props.image}
              alt={this.props.name}
            />
          </div>
          <div className={this.state.texthovered ? "img-description-wrapper text-hovered" : "img-description-wrapper"} onMouseEnter={() => this.setState({ texthovered: true, hovered: true })} onMouseLeave={() => this.setState({ texthovered: false, hovered:false })}>
            <div className="img-description">
            {this.props.description}
            </div>
          </div>
        </div>
        <CardContent>
          <Typography variant="body2" style={{ color: '#ff9800' }}>
          {this.props.name}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to cart">
            <AddShoppingCart />
          </IconButton>
          <IconButton aria-label="share this product">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}