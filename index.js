import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing?')
})

app.listen(8080, () => {
    console.log('running server on port 8080/graphql');
})