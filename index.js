import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { typeDefs } from "./typeDefs.js";
import { resolvers } from "./resolvers.js";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import logger from "morgan"
import cookieParser from "cookie-parser";
import cors from "cors"
import rateLimit from 'express-rate-limit'

const apiLimiter = rateLimit({
	windowMs:  60000, // 15 minutes
	max: 60, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Apply the rate limiting middleware to API calls only



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const startServer = async function(){
    
    const server = new ApolloServer({ typeDefs, resolvers });
    const app = express();
    
    // app.use(logger("dev"))
    app.use("/graphql",apiLimiter)
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }));
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
      
    app.listen({ port: process.env.PORT || 4000 }, () =>
      console.log(`🚀 Server ready`)
    );
}

startServer()