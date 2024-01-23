/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type Mutation = {
  __typename?: 'Mutation';
  queueSubmissionGeneration: Scalars['Boolean']['output'];
};


export type MutationQueueSubmissionGenerationArgs = {
  count?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  submissions: Array<Submission>;
};

export type Submission = {
  __typename?: 'Submission';
  data: Scalars['JSON']['output'];
  id: Scalars['ID']['output'];
  submittedAt: Scalars['DateTime']['output'];
};

export type GetSubmissionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSubmissionsQuery = { __typename?: 'Query', submissions: Array<{ __typename?: 'Submission', id: string, submittedAt: any, data: any }> };


export const GetSubmissionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSubmissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"submissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"submittedAt"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]}}]} as unknown as DocumentNode<GetSubmissionsQuery, GetSubmissionsQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type Mutation = {
  __typename?: 'Mutation';
  queueSubmissionGeneration: Scalars['Boolean']['output'];
};


export type MutationQueueSubmissionGenerationArgs = {
  count?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  submissions: Array<Submission>;
};

export type Submission = {
  __typename?: 'Submission';
  data: Scalars['JSON']['output'];
  id: Scalars['ID']['output'];
  submittedAt: Scalars['DateTime']['output'];
};

export type GetSubmissionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSubmissionsQuery = { __typename?: 'Query', submissions: Array<{ __typename?: 'Submission', id: string, submittedAt: any, data: any }> };


export const GetSubmissionsDocument = gql`
    query getSubmissions {
  submissions {
    id
    submittedAt
    data
  }
}
    `;

/**
 * __useGetSubmissionsQuery__
 *
 * To run a query within a React component, call `useGetSubmissionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSubmissionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSubmissionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSubmissionsQuery(baseOptions?: Apollo.QueryHookOptions<GetSubmissionsQuery, GetSubmissionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSubmissionsQuery, GetSubmissionsQueryVariables>(GetSubmissionsDocument, options);
      }
export function useGetSubmissionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSubmissionsQuery, GetSubmissionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSubmissionsQuery, GetSubmissionsQueryVariables>(GetSubmissionsDocument, options);
        }
export function useGetSubmissionsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetSubmissionsQuery, GetSubmissionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSubmissionsQuery, GetSubmissionsQueryVariables>(GetSubmissionsDocument, options);
        }
export type GetSubmissionsQueryHookResult = ReturnType<typeof useGetSubmissionsQuery>;
export type GetSubmissionsLazyQueryHookResult = ReturnType<typeof useGetSubmissionsLazyQuery>;
export type GetSubmissionsSuspenseQueryHookResult = ReturnType<typeof useGetSubmissionsSuspenseQuery>;
export type GetSubmissionsQueryResult = Apollo.QueryResult<GetSubmissionsQuery, GetSubmissionsQueryVariables>;