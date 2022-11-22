import { Fragment } from "react";
import { useSelector } from "react-redux";
import Head from "next/head";
import Category from "../components/Products/Category";
import classes from "../components/Products/Category.module.css";

function HomePage() {
  const isLoading = useSelector((state) => state.cart.isLoading);

  if (isLoading) {
    return (
      <Fragment>
        <Head>
          <title>Landmark PH</title>
          <meta name="description" content="Landmark Online Supermarket" />
        </Head>
        <p className={classes["product-loading"]}>Loading...</p>;
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>Landmark PH</title>
        <meta name="description" content="Landmark Online Supermarket" />
      </Head>
      <Category />
    </Fragment>
  );
}

export default HomePage;
