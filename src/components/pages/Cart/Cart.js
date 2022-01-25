import React, { useLayoutEffect } from 'react'
import {
    Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import useStyles from "../../kalijFile/Component/kalijcss";
import useStyle from './style';
import CheckOut from './checkout'
const Cart = ({ cartItems, handleAddProduct, handleRemove, handleClearAll }) => {
    useLayoutEffect(() => {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'instant',
        });
    }, []);
    const user = JSON.parse(localStorage.getItem('profile'))
  const classes = useStyles();
  const classed = useStyle();
  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);
  return (
    <div className={classes.marg}>
      {cartItems.length === 0 && (
        <div className={classes.Food}> No Cart Added <span className={classes.spanFood}> Login</span> To Add Cart </div>
      )}
      {cartItems.length !== 0 && (
            <h2 className={classes.Food} >YOUR <span className={classes.spanFood}>CART</span></h2>
            )}
       <Grid className={classes.container} container alignItems="stretch" spacing={3}>
    {cartItems.map((item) => (
 <Grid key={item._id} item xs={12} sm={6} md={3} lg={3}>
        <Card className={classes.card} raised elevation={6}>
          <CardMedia
            className={classes.media}
            image={
              item.selectedFile ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            title={item.title}
          />

          <Typography
            className={classes.cartTitle}
            variant="h6"
            component="h2"
          >
            User: <span className={classes.spanFood}>{user?.result.name.slice(0, 6)}</span>
          </Typography>
          <CardContent className={classes.cartTitle}>
          <Typography variant="body2" color="textSecondary" component="p">Your Order: {item.title}</Typography>
        </CardContent>
          <CardActions className={classes.cardActions}>
            <Button size="small" className={classed.button}>
            {item.quantity} * Rs. {item.quantity * item.price}
            </Button>
            <div className={classes.plus}>
            <Button size="small"  onClick={() => handleAddProduct(item)} className={classed.add} color="primary">
            <span>+</span>
            </Button>
            <Button size="small"  onClick={() => handleRemove(item)} color='secondary' className={classed.minus}>
            <span>-</span>
            </Button>
            </div>
          </CardActions>
        </Card>
        </Grid>
      ))}
</Grid>
{cartItems.length !== 0 && (
      <div className={classed.clear}>
      <div><Button className={classed.total}>Total Price: {totalPrice}</Button></div>
    <div>
        <Button className={classed.total} onClick={handleClearAll}>Clear Cart</Button>
    </div>
    <div>
        <Button className={classed.total}><CheckOut cartItems={cartItems} /></Button>
    </div>
    </div>
    )}
    </div>
  );
};

export default Cart;
