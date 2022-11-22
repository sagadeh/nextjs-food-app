import Card from "../UI/Card";
import ProductItem from "./ProductItem/ProductItem";
import classes from "./AvailableProducts.module.css";

const AvailableProducts = (props) => {
  //const [meals, setMeals] = useState([]);
  //const [isLoading, setIsLoading] = useState(true);
  //const [httpError, setHttpError] = useState();

  // useEffect(() => {
  //   const fetchMeals = async () => {
  //     const response = await fetch(
  //       "https://react-8bd3e-default-rtdb.firebaseio.com/meals.json"
  //     );

  //     if (!response.ok) {
  //       throw new Error("Something went wrong");
  //     }

  //     const responseData = await response.json();

  //     const loadedMeals = [];

  //     for (const key in responseData) {
  //       loadedMeals.push({
  //         id: key,
  //         name: responseData[key].name,
  //         description: responseData[key].description,
  //         price: responseData[key].price,
  //         productImage: responseData[key].productImage,
  //       });
  //     }

  //     setMeals(loadedMeals);
  //     setIsLoading(false);
  //   };

  //   fetchMeals().catch((error) => {
  //     setIsLoading(false);
  //     setHttpError(error.message);
  //   });
  // }, []);
  const productsList = props.onProductsList.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id} // this is new!
      name={product.name}
      description={product.description}
      price={product.price}
      productImage={product.productImage}
    />
  ));
  // if (isLoading) {
  //   return (
  //     <section className={classes.MealsLoading}>
  //       <p>Loading...</p>
  //     </section>
  //   );
  // }

  // if (httpError) {
  //   return (
  //     <section className={classes.MealsError}>
  //       <p>{httpError}</p>
  //     </section>
  //   );
  // }
  return (
    <section className={classes.products}>
      <Card>
        <ul>{productsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;
