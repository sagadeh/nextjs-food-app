import { Fragment } from "react";

import ProductsSummary from "./ProductsSummary";
import AvailableProducts from "./AvailableProducts";
import Category from "./Category";

const Products = () => {
  return (
    <Fragment>
      <ProductsSummary />
      <AvailableProducts />
      <Category />
    </Fragment>
  );
};

export default Products;
