import app from "./server.js";
import mongodb from "mongodb";
import ReviewsDAO from "./dao/reviewsDAO.js";

const MongoClient = mongodb.MongoClient;
const mongo_username = "raymonderzsaragih";
const mongo_password = "JH7vnoWJ6ZmGo6Rn";
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.yvsbel1.mongodb.net/?retryWrites=true&w=majority`;
const port = 8000;

MongoClient.connect(uri, {
  maxPoolSize: 50,
  wtimeoutMS: 2500,
  useNewUrlParser: true,
})
  .then(async (client) => {
    await ReviewsDAO.injectDB(client); // sending db connection to ReviewsDAO
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });
