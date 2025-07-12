import React from "react";
import Product from './product';

function ProductTab() {
    let styles = {
        display:"flex",
        flexwrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    }
  return (
    <div style={styles}>
      
      <Product title="logitech Mx Master" idx={0} />
      <Product title="Apple pencil 2nd gen" idx={1} />
      <Product title="Zebronics zeb transfer" idx={2} />
      <Product title="Petronics toad 23" idx={3} />
    </div>
  );
};

export default ProductTab;
