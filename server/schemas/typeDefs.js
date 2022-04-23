const {gql} = require('apollo-server-express');

const typeDefs = gql `
    type User {
        _id: ID
        username: String
        email: String 
        allPlantings: [Planting]
    }    
    type Planting {
        _id: ID
        cropType: String
        DTM: Int
        harvestDate: String
        username: String      
    }
    type CropReference {
        _id: ID
        name: String
        DTM: Int 
        harvestwindow: Int
        sowingDate: String
    }
    type Auth {
        token: ID!
        user: User
        }
    type Query {
        me: User
        allCrops: [CropReference]
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addPlanting(cropType: String!,username: String!, DTM: Int!, harvestDate: String!): Planting
    }`
module.exports = typeDefs;


