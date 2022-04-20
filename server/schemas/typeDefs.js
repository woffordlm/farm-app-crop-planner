const {
gql
} = require('apollo-server-express');

const typeDefs = gql `
    type User {
        _id: ID
        username: String
        email: String
    type Planting {
        _id: ID
        harvestDate: String
        username: String
        plantingDate: Int
    }
    type Query {
        me: User
    }
    type Mutation {
        login(email: String!, password: String!): User
        addUser(username: String!, email: String!, password: String!): User
        addPlanting(cropType: String!, havestDate: Date!): Planting

    }`
module.exports = typeDefs;


// type Auth {
//     token: ID!
//     user: User
//       }