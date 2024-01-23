import { gql } from "@apollo/client";

export const GET_ALL_SUBMISSIONS = gql`
  query getSubmissions {
    submissions {
      id
      submittedAt
      data
    }
  }
`;
