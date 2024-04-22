import { MongoClient, ServerApiVersion } from "mongodb";

const URI = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Pass}@cluster0.e9dao1z.mongodb.net`;

const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const newsCollection = client.db("dragon-news").collection("news");

const connectdb = () => client.connect();

const run = async () => {
  try {
    await connectdb();
    await client.db("admin").command({ ping: 1 });
    console.log("successfully connected to MongoDB!");
  } catch (e) {
    throw new Error("DB not connected");
  }
};

export { newsCollection, run };
