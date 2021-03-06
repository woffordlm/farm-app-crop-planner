import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
      email
      allPlantings {
        _id
        cropType
        dtm
        harvestDate
        username
      }
    }
  }
}
`
export const ADD_PLANTING = gql`
mutation addPlanting($cropType: String!, $username: String!, $dtm: Int!, $harvestDate: String!) {
  addPlanting(cropType: $cropType, username: $username, dtm: $dtm, harvestDate: $harvestDate) {
    _id
    cropType
    dtm
    harvestDate
    username
  }
}
`