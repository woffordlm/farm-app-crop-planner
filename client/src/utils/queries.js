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
`;

// create mutation for createPlanting
// create mutation for delete planting
// create mutation for delete planting
// create mutation for planted
// create mutation for seeded