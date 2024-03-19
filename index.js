import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// A schema is a collection of type definitions (hence "typeDefs")

import db from './db.js'

import { typeDefs } from './schema.js';

const resolvers = {
  Query: {
    games(){
      return db.games
    },
    reviews(){
      return db.reviews
    },
    authors(){
      return db.authors
    }
  }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);