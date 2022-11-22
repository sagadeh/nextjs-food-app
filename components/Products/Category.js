import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import Dairy from "../../assets/dairy.png";
import Snacks from "../../assets/snacks.png";
import Drinks from "../../assets/drinks.png";
import Plants from "../../assets/fruits-and-veggies.png";
import MeatAndSeafood from "../../assets/meat-and-seafood.png";
import Beverages from "../../assets/beverages.png";
import Frozen from "../../assets/frozen.png";
import Pantry from "../../assets/pantry.png";
import CategoryItem from "./CategoryItem";
import classes from "../Products/Category.module.css";
import Card from "../UI/Card";
import { cartActions } from "../../store/cart-slice";

const Categories = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const dairyAndEggsHandler = () => {
    dispatch(cartActions.productIsLoading(true));
    router.push("/products/dairy-and-eggs");
  };
  const snacksHandler = () => {
    dispatch(cartActions.productIsLoading(true));
    router.push("/products/snacks-and-confectioneries");
  };
  const drinksHandler = () => {
    dispatch(cartActions.productIsLoading(true));
    router.push("/products/beer-wines-and-spirit");
  };
  const plantsHandler = () => {
    dispatch(cartActions.productIsLoading(true));
    router.push("/products/fruits-and-vegetables");
  };
  const meatAndSeafoodHandler = () => {
    dispatch(cartActions.productIsLoading(true));
    router.push("/products/meat-and-seafood");
  };
  const beveragesHandler = () => {
    dispatch(cartActions.productIsLoading(true));
    router.push("/products/beverages");
  };
  const frozenHandler = () => {
    dispatch(cartActions.productIsLoading(true));
    router.push("/products/frozen");
  };
  const pantryHandler = () => {
    dispatch(cartActions.productIsLoading(true));
    router.push("/products/pantry");
  };

  return (
    <section className={classes.category}>
      <Card>
        <ul>
          <CategoryItem
            image={Dairy}
            title="Dairy and Eggs"
            onClick={dairyAndEggsHandler}
          />
          <CategoryItem
            image={Snacks}
            title="Snacks & Confectioneries"
            onClick={snacksHandler}
          />
          <CategoryItem
            image={Drinks}
            title="Beer, Wine & Spirit"
            onClick={drinksHandler}
          />
          <CategoryItem
            image={Plants}
            title="Fruits & Vegetables"
            onClick={plantsHandler}
          />
          <CategoryItem
            image={MeatAndSeafood}
            title="Meat & Seafood"
            onClick={meatAndSeafoodHandler}
          />
          <CategoryItem
            image={Beverages}
            title="Beverages"
            onClick={beveragesHandler}
          />
          <CategoryItem image={Frozen} title="Frozen" onClick={frozenHandler} />
          <CategoryItem image={Pantry} title="Pantry" onClick={pantryHandler} />
        </ul>
      </Card>
    </section>
  );
};

export default Categories;
