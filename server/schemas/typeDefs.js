const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String 
        allPlantings: [Planting]
    }    
    type Planting {
        _id: ID
        cropType: String
        dtm: Int
        harvestDate: String
        username: String      
    }
    type CropReference {
        _id: ID
        name: String
        dtm: Int 
        harvestwindow: Int
        sowingDates: String
    }
    type Auth {
        token: ID!
        user: User
        }
    type Query {
        me: User
        allCrops: [CropReference]
        allPlantings(username: String): [Planting]
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addPlanting(cropType: String!,username: String!, dtm: Int!, harvestDate: String!): Planting
        
    }`
module.exports = typeDefs;


