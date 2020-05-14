import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const PORT = 4000;

const server = new GraphQLServer({
  typeDefs: "./graphql/schema.graphql",
  resolvers,
});

server.start(() =>
  console.log(`✅ GraphQL Server Running: http://localhost:${PORT}`)
);
