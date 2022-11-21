import { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import Category from "./Category";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
      <Category />
    </Fragment>
  );
};

export default Meals;
