// Express is a Node.js framework used to create web servers and APIs easily.
const express = require("express");  //Bring the Express package into this file."

//graphqlHTTP is middleware that allows Express to handle GraphQL requests.
const { graphqlHTTP } = require("express-graphql"); //express-graphql connects GraphQL with Express.
const { buildSchema } = require("graphql");

const app = express();

// GraphQL Schema
const schema = buildSchema(`
    type Query {
        hello: String
        student: Student
    }

    type Student {
        id: ID
        name: String
        course: String
        age: Int
    }
`);
const root = {
    hello: () => {
        return "Hello World";
    },

    student: () => {
        return {
            id: "101",
            name: "Sushant",
            course: "B.Tech CSE",
            age: 19
        };
    }
};

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true
    })
);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000/graphql");
});