import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import Image from "next/image";
import classes from "../Products/CategoryItem.module.css";
import { cartActions } from "../../store/cart-slice";

const CategoryItem = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const categoryHandler = (event) => {
    dispatch(cartActions.productIsLoading(true));
    router.push("/products/" + event.target.id);
  };

  return (
    <li className={classes["category-items"]} onClick={categoryHandler}>
      <Image
        id={props.id}
        src={props.image}
        alt={props.title}
        width={199}
        height={205}
        className={classes["category-img"]}
      />
      <p className={classes["category-text"]}>{props.title}</p>
    </li>
  );
};

export default CategoryItem;
