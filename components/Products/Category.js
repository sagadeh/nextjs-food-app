import CategoryItem from "./CategoryItem";
import classes from "../Products/Category.module.css";
import Card from "../UI/Card";

const Categories = (props) => {
  const category = props.onCategoryList.map((category) => (
    <CategoryItem
      key={category.id}
      id={category.id}
      image={category.image}
      title={category.title}
    />
  ));

  return (
    <section className={classes.category}>
      <Card>
        <ul>{category}</ul>
      </Card>
    </section>
  );
};

export default Categories;
