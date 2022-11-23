import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart-slice";
import Header from "../../components/Layout/Header";
import ProductsSummary from "../Products/ProductsSummary";
import Cart from "../Cart/Cart";

const Layout = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const dispatch = useDispatch();

  const showCartHandler = () => {
    setCartIsShown(true);
    dispatch(cartActions.checkoutFormVisible(false));
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <ProductsSummary />
        {props.children}
      </main>
    </Fragment>
  );
};

export default Layout;
