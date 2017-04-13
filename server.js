const express = require('express');
const expressGraphQL = require('express-graphql');

// Initialize server instance
const app = express();

// Config GraphQL
app.use('/graphql', expressGraphQL({
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Listening...');
});
