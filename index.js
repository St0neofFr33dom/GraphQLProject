import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { typeDefs } from "./typeDefs.js";
import { resolvers } from "./resolvers.js";
import mongoose from "mongoose";


const startServer = async function(){
    
    const server = new ApolloServer({ typeDefs, resolvers });
    const app = express();
    
    await server.start()
    server.applyMiddleware({ app });
    
    await mongoose.connect(
        "mongodb://localhost/fe9test",
        () => {
          console.log("Connected to database");
        },
        (e) => console.error(e)
      );


    app.listen({ port: 4000 }, () =>
      console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );
}

startServer()