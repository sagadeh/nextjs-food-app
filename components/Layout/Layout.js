import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart-slice";
import Header from "../../components/Layout/Header";
import MealsSummary from "../Meals/MealsSummary";
import Cart from "../Cart/Cart";

const Layout = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const dispatch = useDispatch();

  const showCartHandler = () => {
    setCartIsShown(true);
    dispatch(cartActions.hideCheckoutForm());
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <MealsSummary />
        {props.children}
      </main>
    </Fragment>
  );
};

export default Layout;
