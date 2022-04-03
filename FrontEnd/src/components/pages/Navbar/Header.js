import React, { useEffect, useState } from 'react';
import Silder from '../homeSilder/silde';
export default function Header() {
  // const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div id="header">
      <center><Silder /></center>
    </div>
  );
}