const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

// Initialize server instance
const app = express();

// Config GraphQL
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Listening...');
});
