import React from 'react';
import Model from './messageM'

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  btn: {
    padding: '5px 10px',
    lineHeight: '1.7',
    borderRadius: '12px',
    border: '0px solid white',
    backgroundColor: '#4abdac',
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: '1px',
    '&:hover': {
      background: "#008f95",
      color: 'white',
    },
  },
}));
export default function TransitionsModal() {
  const classes = useStyles();
  const [openM, setOpenM] = React.useState(false);
  const handleOpenM = () => {
    setOpenM(true);
  };
  return (
    <>
      <button type="button" className={classes.btn} onClick={handleOpenM}>
        Add Cart
      </button>
      <Model openM={openM} setOpenM={setOpenM} />
    </>
  );
}
