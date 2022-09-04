import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { typeDefs } from "./typeDefs.js";
import { resolvers } from "./resolvers.js";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import logger from "morgan"
import cookieParser from "cookie-parser";
import helmet from "helmet";



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const startServer = async function(){
    
    const server = new ApolloServer({ typeDefs, resolvers });
    const app = express();
    
    app.use(logger("dev"))
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }));
    app.use(helmet())
    app.use(cookieParser())
    app.use(express.static(path.join(__dirname, "public")));


    await server.start()
    server.applyMiddleware({ app });
    


    await mongoose.connect(
      process.env.CONNECTION_STRING,
      () => {
        console.log("Connected to database");
      },
      (e) => console.error(e)
      );
      
      app.use("/",function(req,res){
        res.render("index",{title:"FE9 API"})
      })

    app.listen({ port: 4000 }, () =>
      console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );
}

startServer()