import { gql } from "@apollo/client";

export const GENERATE_SUBMISSIONS = gql`
  mutation GenerateSubmissions($count: Int!) {
    queueSubmissionGeneration(count: $count)
  }
`;
