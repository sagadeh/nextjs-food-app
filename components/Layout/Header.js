import { Fragment } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Image from "next/image";

import HeaderCartButton from "./HeaderCartButton";
import bannerImage from "../../assets/banner.png";
import classes from "./Header.module.css";
import logoImage from "../../assets/logo.png";
import { cartActions } from "../../store/cart-slice";

const Header = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const logoHandler = () => {
    dispatch(cartActions.productIsLoading(false));
    router.push("/");
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <Image
          className={classes.logo}
          src={logoImage}
          alt="LandmarkPH Logo"
          onClick={logoHandler}
        />
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <Image src={bannerImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
