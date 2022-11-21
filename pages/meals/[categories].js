import { MongoClient } from "mongodb";
import AvailableMeals from "../../components/Meals/AvailableMeals";

const MealsPage = (props) => {
  return <AvailableMeals onProductsList={props.products} />;
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      { params: { categories: "dairy-and-eggs" } },
      { params: { categories: "snacks-and-confectioneries" } },
      { params: { categories: "beer-wines-and-spirit" } },
      { params: { categories: "fruits-and-vegetables" } },
      { params: { categories: "meat-and-seafood" } },
      { params: { categories: "beverages" } },
      { params: { categories: "frozen" } },
      { params: { categories: "pantry" } },
    ],
  };
}

export async function getStaticProps(context) {
  const categoryRoute = context.params.categories;

  const client = await MongoClient.connect(
    "mongodb+srv://demo-food-app:VlcFlvCltWJvQ4wx@cluster0.ddtifus.mongodb.net/demo-food-app?retryWrites=true&w=majority"
  );
  const db = client.db();

  const productsCollection = db.collection("products");

  const products = await productsCollection.find().toArray();

  const filtered = products.filter(
    (products) => products.category === categoryRoute
  );

  console.log(filtered);

  client.close();

  return {
    props: {
      products: filtered.map((product) => ({
        name: product.name,
        description: product.description,
        price: product.price,
        productImage: product.productImage,
        id: product._id.toString(),
      })),
      revalidate: 1,
    },
  };
}

export default MealsPage;