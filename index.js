import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing?')
})

const root = {
    friend: () => {
        return {
            "id": 29789798,
            "firstName": "Joe",
            "lastName": "Pera",
            "gender": "Male",
            "language": "English",
            "emails": [{ email: "no@no.com" }, { email: "another@me.com" }]
        }
    }
}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8080, () => {
    console.log('running server on port 8080/graphql');
})