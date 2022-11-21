import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://demo-food-app:VlcFlvCltWJvQ4wx@cluster0.ddtifus.mongodb.net/demo-food-app?retryWrites=true&w=majority"
    );

    const db = client.db();

    const productsCollection = db.collection("orders");

    const result = await productsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Checkout form inserted!" });
  }
}

export default handler;
