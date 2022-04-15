import React from 'react'
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia
} from "@material-ui/core";
import { Fade } from "react-reveal";
import useStyle from './style';
import CheckOut from './checkout'
const Cart = ({ cartItems, handleAddProduct, handleRemove, handleClearAll }) => {

  const user = JSON.parse(localStorage.getItem('profile'))
  const classed = useStyle();
  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);
  return (
    <div className={classed.marg}>

      <Fade left>
        {cartItems.length === 0 && (
          <div className={classed.Food} style={{
            height: '80vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', letterSpacing: '3px', fontWeight: '600',
          }} > No Cart Added <span className={classed.spanFood} > Login </span> To Add Cart </div>
        )}
      </Fade>
      {cartItems.length !== 0 && (
        <h2 className={classed.Food} >YOUR <span className={classed.spanFood}>CART</span></h2>
      )}
      <Fade top>
        <Grid container alignItems="stretch" spacing={3}>
          {cartItems.map((item) => (
            <Grid key={item._id} item xs={12} sm={6} md={4} lg={3}>
              <Card className={classed.card} raised elevation={4}>
                <CardMedia className={classed.madia} style={{ backgroundImage: `url(${item.selectedFile})` || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png' }} title={item.title} />

                <Typography
                  className={classed.cartTitle}
                  variant="h6"
                  component="h2"
                >
                  User: <span className={classed.spanFood}>{user?.result.name.slice(0, 6)}</span>
                </Typography>
                <CardContent className={classed.cartTitle}>
                  <Typography variant="body2" color="textSecondary" component="p">Your Order: {item.title}</Typography>
                </CardContent>
                <CardActions className={classed.cardActions}>
                  <Button size="small" className={classed.button}>
                    {item.quantity} * Rs. {item.quantity * item.price}
                  </Button>
                  <div className={classed.plus}>
                    <Button size="small" onClick={() => handleAddProduct(item)} className={classed.add} color="primary">
                      <span>+</span>
                    </Button>
                    <Button size="small" onClick={() => handleRemove(item)} color='secondary' className={classed.minus}>
                      <span>-</span>
                    </Button>
                  </div>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Fade>
      {cartItems.length !== 0 && (
        <div className={classed.clear}>
          <Fade left>
            <div><Button className={classed.total}>Total Price: {totalPrice}</Button></div>
          </Fade>
          <Fade top>
            <div>
              <Button><CheckOut cartItems={cartItems} /></Button>
            </div>
          </Fade>
          <Fade right>
            <div>
              <Button className={classed.total} onClick={handleClearAll}>Clear Cart</Button>
            </div>
          </Fade>
        </div>
      )}
    </div>
  );
};

export default Cart;
