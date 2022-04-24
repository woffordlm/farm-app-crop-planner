import { gql } from '@apollo/client';
/* 
export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      cropPlan {
        _id
        plantings
        teamMembers
      }
    }
  }
`; */

export const QUERY_CROPREFERENCE = gql`
query Query {
  allCrops {
    _id
    name
    dtm
    harvestwindow
    sowingDates
  }
}
`;

export const QUERY_PLANTINGS= gql`
  query allPlantings($username: String) {
    allPlantings(username: $username) {
      _id: ID
      cropType: String
      dtm: Int
      harvestDate: String
      username: String   
      plantingDate: String
    }
  }
`;

// create mutation for createPlanting
// create mutation for delete planting
// create mutation for delete planting
// create mutation for planted
// create mutation for seeded