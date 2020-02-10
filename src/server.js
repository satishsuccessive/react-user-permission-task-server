import { ApolloServer, makeExecutableSchema, gql } from 'apollo-server-express';
import express from 'express';
const graphqlExpress = require('express-graphql');
import { mergeSchemas } from 'apollo-server';
import bodyParser from 'body-parser';
import http from 'http';
import config from './config/configuration';
import schema from '.';


// Initialize the app
const app = express();

// const auth = new Authenticate(configurations);

export const server = new ApolloServer({
  schema: makeExecutableSchema(schema),
});

// The GraphQL endpoint
// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
// app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

server.applyMiddleware({app});
export const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(4000, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`); // eslint-disable-line 
});