// import express from "express";
// import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from "url";
// import { ApolloServer } from "@apollo/server";
// import { expressMiddleware } from "@apollo/server/express4";
// import bodyParser from "body-parser";
// import typeDefs from "./graphql/typeDefs.js";
// import resolvers from "./graphql/resolvers.js";

// dotenv.config();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();

// // Serve frontend
// app.use(express.static(path.join(__dirname, "public")));

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// await server.start();

// app.use(
//   "/graphql",
//   bodyParser.json(),
//   expressMiddleware(server)
// );

// app.listen(4000, () => {
//   console.log("🚀 Server running at http://localhost:4000");
//   console.log("📌 GraphQL at http://localhost:4000/graphql");
// });

// -------------------------------------------------------------------------
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";

import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers.js";

dotenv.config();

const app = express();
app.use(cors()); // ✅ allow frontend access

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

app.listen(4000, () => {
  console.log("🚀 Backend running at http://localhost:4000/graphql");
});
