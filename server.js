"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.httpServer = exports.server = void 0;

var _apolloServerExpress = require("apollo-server-express");

var _express = _interopRequireDefault(require("express"));

var _apolloServer = require("apollo-server");

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _http = _interopRequireDefault(require("http"));

var _configuration = _interopRequireDefault(require("./config/configuration"));

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const graphqlExpress = require('express-graphql');

// Initialize the app
const app = (0, _express.default)(); // const auth = new Authenticate(configurations);

const server = new _apolloServerExpress.ApolloServer({
  schema: (0, _apolloServerExpress.makeExecutableSchema)(_.default)
}); // The GraphQL endpoint
// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
// GraphiQL, a visual editor for queries
// app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

exports.server = server;
server.applyMiddleware({
  app
});

const httpServer = _http.default.createServer(app);

exports.httpServer = httpServer;
server.installSubscriptionHandlers(httpServer);
httpServer.listen(4000, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`); // eslint-disable-line 
});