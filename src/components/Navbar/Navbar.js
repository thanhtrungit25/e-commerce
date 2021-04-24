import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";

import logo from "../../assets/commerce.png";
import { ShoppingCart } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

import useStyles from "./styles";

export default function Navbar({ totalItems }) {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src={logo}
              alt="Commerce.js"
              height="25px"
              className={classes.image}
            />
            Commerce.js
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
