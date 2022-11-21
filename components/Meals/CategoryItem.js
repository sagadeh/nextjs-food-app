import Image from "next/image";
import classes from "../Meals/CategoryItem.module.css";

const CategoryItem = (props) => {
  return (
    <li className={classes["category-items"]} onClick={props.onClick}>
      <Image
        className={classes["category-img"]}
        src={props.image}
        alt={props.title}
      />
      <p className={classes["category-text"]}>{props.title}</p>
    </li>
  );
};

export default CategoryItem;
