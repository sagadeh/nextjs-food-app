import { Fragment } from "react";
import { useSelector } from "react-redux";
import Head from "next/head";
import Category from "../components/Products/Category";
import classes from "../components/Products/Category.module.css";

function HomePage() {
  const isLoading = useSelector((state) => state.cart.isLoading);

  const categoryList = [
    {
      id: "dairy-and-eggs",
      title: "Dairy and Eggs",
      image: "/dairy.png",
    },
    {
      id: "snacks-and-confectioneries",
      title: "Snacks & Confectioneries",
      image: "/snacks.png",
    },
    {
      id: "beer-wines-and-spirit",
      title: "Beer, Wine & Spirit",
      image: "/drinks.png",
    },
    {
      id: "fruits-and-vegetables",
      title: "Fruits & Vegetables",
      image: "/fruits-and-veggies.png",
    },
    {
      id: "meat-and-seafood",
      title: "Meat & Seafood",
      image: "/meat-and-seafood.png",
    },
    {
      id: "beverages",
      title: "Beverages",
      image: "/beverages.png",
    },
    {
      id: "frozen",
      title: "Frozen",
      image: "/frozen.png",
    },
    {
      id: "pantry",
      title: "Pantry",
      image: "/pantry.png",
    },
  ];

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
      <Category onCategoryList={categoryList} />
    </Fragment>
  );
}

export default HomePage;
