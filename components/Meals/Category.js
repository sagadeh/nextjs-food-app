import { useRouter } from "next/router";

import Dairy from "../../assets/dairy.png";
import Snacks from "../../assets/snacks.png";
import Drinks from "../../assets/drinks.png";
import Plants from "../../assets/fruits-and-veggies.png";
import MeatAndSeafood from "../../assets/meat-and-seafood.png";
import Beverages from "../../assets/beverages.png";
import Frozen from "../../assets/frozen.png";
import Pantry from "../../assets/pantry.png";
import CategoryItem from "./CategoryItem";
import classes from "../Meals/Category.module.css";
import Card from "../UI/Card";

const Categories = () => {
  const router = useRouter();

  const dairyAndEggsHandler = () => {
    router.push("/meals/dairy-and-eggs");
  };
  const snacksHandler = () => {
    router.push("/meals/snacks-and-confectioneries");
  };
  const drinksHandler = () => {
    router.push("/meals/beer-wines-and-spirit");
  };
  const plantsHandler = () => {
    router.push("/meals/fruits-and-vegetables");
  };
  const meatAndSeafoodHandler = () => {
    router.push("/meals/meat-and-seafood");
  };
  const beveragesHandler = () => {
    router.push("/meals/beverages");
  };
  const frozenHandler = () => {
    router.push("/meals/frozen");
  };
  const pantryHandler = () => {
    router.push("/meals/pantry");
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
