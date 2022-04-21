const {gql} = require('apollo-server-express');

const typeDefs = gql `
    type User {
        _id: ID
        username: String
        email: String
        
    }    
    type Planting {
        _id: ID
        cropType: String
        DTM: Int
        harvestDate: String
        username: String
        
    }
    type Query {
        me: User
    }
    type Mutation {
        login(email: String!, password: String!): User
        addUser(username: String!, email: String!, password: String!): User
        addPlanting(cropType: String!,username: String!, DTM: Int!, harvestDate: String!): Planting
    }`
module.exports = typeDefs;


// type Auth {
//     token: ID!
//     user: User
//       }

// allPlantings: [Planting]
// harvestDate: String
// havestDate: String!

