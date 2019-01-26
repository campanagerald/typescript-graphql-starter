import express from 'express';
import types from './types';
import resolvers from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';
import { ApolloServer } from 'apollo-server-express';

const app = express();

const PORT: any = process.env.PORT;
const HOST: any = process.env.HOST;

const schema = makeExecutableSchema({
  typeDefs: types,
  resolvers: resolvers
});

const apollo = new ApolloServer({
  schema,
  formatError: (err: any) => {
    return {
      message: err.message,
      code: err.originalError && err.originalError.code,
      locations: err.locations,
      path: err.path
    };
  }
});

apollo.applyMiddleware({ app });

app.listen(PORT, HOST, () => {
  console.log('Server ready at', `http://${HOST}:${PORT}${apollo.graphqlPath}`);
});
