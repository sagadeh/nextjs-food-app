import { useSelector } from "react-redux";
import Category from "../components/Meals/Category";
import classes from "../components/Meals/Category.module.css";

function HomePage() {
  const isLoading = useSelector((state) => state.cart.isLoading);

  if (isLoading) {
    return <p className={classes["product-loading"]}>Loading...</p>;
  }

  return <Category />;
}

export default HomePage;
