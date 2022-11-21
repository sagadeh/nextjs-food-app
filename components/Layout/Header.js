import { Fragment } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import HeaderCartButton from "./HeaderCartButton";
import bannerImage from "../../assets/banner.png";
import classes from "./Header.module.css";
import logoImage from "../../assets/logo.png";

const Header = (props) => {
  const router = useRouter();

  const logoHandler = () => {
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
