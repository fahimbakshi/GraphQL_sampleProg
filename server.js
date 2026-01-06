import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers.js";

dotenv.config();

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers
});

await server.start();

app.use(
  "/graphql",
  bodyParser.json(),
  expressMiddleware(server)
);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 GraphQL running at http://localhost:${PORT}/graphql`);
});
