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
  ISO8601DateTime: { input: any; output: any; }
};

export type Event = {
  __typename?: 'Event';
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  pictureUrls?: Maybe<Array<Scalars['String']['output']>>;
  place?: Maybe<Place>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createEvent?: Maybe<Event>;
  createPlace?: Maybe<Place>;
  deleteEvent?: Maybe<Scalars['String']['output']>;
  deletePlace?: Maybe<Scalars['String']['output']>;
  updateEvent?: Maybe<Event>;
  updatePlace?: Maybe<Place>;
};


export type MutationCreateEventArgs = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  placeId: Scalars['ID']['input'];
};


export type MutationCreatePlaceArgs = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationDeleteEventArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePlaceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateEventArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  placeId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdatePlaceArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Place = {
  __typename?: 'Place';
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<Event>>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  pictureUrls?: Maybe<Array<Scalars['String']['output']>>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  event: Event;
  events: Array<Event>;
  /** Int */
  eventsCount: Scalars['Int']['output'];
  place: Place;
  places: Array<Place>;
  /** Int */
  placesCount: Scalars['Int']['output'];
};


export type QueryEventArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPlaceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPlacesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type FetchEventQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FetchEventQuery = { __typename?: 'Query', event: { __typename?: 'Event', id: string, name?: string | null, description?: string | null, pictureUrls?: Array<string> | null, place?: { __typename?: 'Place', id: string, name?: string | null } | null } };

export type FetchEventsDataQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchEventsDataQuery = { __typename?: 'Query', events: Array<{ __typename?: 'Event', id: string, name?: string | null, description?: string | null, pictureUrls?: Array<string> | null, place?: { __typename?: 'Place', id: string, name?: string | null } | null }> };

export type FetchPlaceQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FetchPlaceQuery = { __typename?: 'Query', place: { __typename?: 'Place', id: string, name?: string | null, description?: string | null, pictureUrls?: Array<string> | null, events?: Array<{ __typename?: 'Event', id: string, name?: string | null }> | null } };

export type FetchPlacesDataQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchPlacesDataQuery = { __typename?: 'Query', places: Array<{ __typename?: 'Place', id: string, name?: string | null, description?: string | null, pictureUrls?: Array<string> | null, events?: Array<{ __typename?: 'Event', id: string, name?: string | null }> | null }> };


export const FetchEventDocument = gql`
    query FetchEvent($id: ID!) {
  event(id: $id) {
    id
    name
    description
    pictureUrls
    place {
      id
      name
    }
  }
}
    `;

/**
 * __useFetchEventQuery__
 *
 * To run a query within a React component, call `useFetchEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchEventQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFetchEventQuery(baseOptions: Apollo.QueryHookOptions<FetchEventQuery, FetchEventQueryVariables> & ({ variables: FetchEventQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchEventQuery, FetchEventQueryVariables>(FetchEventDocument, options);
      }
export function useFetchEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchEventQuery, FetchEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchEventQuery, FetchEventQueryVariables>(FetchEventDocument, options);
        }
export function useFetchEventSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FetchEventQuery, FetchEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FetchEventQuery, FetchEventQueryVariables>(FetchEventDocument, options);
        }
export type FetchEventQueryHookResult = ReturnType<typeof useFetchEventQuery>;
export type FetchEventLazyQueryHookResult = ReturnType<typeof useFetchEventLazyQuery>;
export type FetchEventSuspenseQueryHookResult = ReturnType<typeof useFetchEventSuspenseQuery>;
export type FetchEventQueryResult = Apollo.QueryResult<FetchEventQuery, FetchEventQueryVariables>;
export const FetchEventsDataDocument = gql`
    query FetchEventsData {
  events {
    id
    name
    description
    pictureUrls
    place {
      id
      name
    }
  }
}
    `;

/**
 * __useFetchEventsDataQuery__
 *
 * To run a query within a React component, call `useFetchEventsDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchEventsDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchEventsDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchEventsDataQuery(baseOptions?: Apollo.QueryHookOptions<FetchEventsDataQuery, FetchEventsDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchEventsDataQuery, FetchEventsDataQueryVariables>(FetchEventsDataDocument, options);
      }
export function useFetchEventsDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchEventsDataQuery, FetchEventsDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchEventsDataQuery, FetchEventsDataQueryVariables>(FetchEventsDataDocument, options);
        }
export function useFetchEventsDataSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FetchEventsDataQuery, FetchEventsDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FetchEventsDataQuery, FetchEventsDataQueryVariables>(FetchEventsDataDocument, options);
        }
export type FetchEventsDataQueryHookResult = ReturnType<typeof useFetchEventsDataQuery>;
export type FetchEventsDataLazyQueryHookResult = ReturnType<typeof useFetchEventsDataLazyQuery>;
export type FetchEventsDataSuspenseQueryHookResult = ReturnType<typeof useFetchEventsDataSuspenseQuery>;
export type FetchEventsDataQueryResult = Apollo.QueryResult<FetchEventsDataQuery, FetchEventsDataQueryVariables>;
export const FetchPlaceDocument = gql`
    query FetchPlace($id: ID!) {
  place(id: $id) {
    id
    name
    description
    pictureUrls
    events {
      id
      name
    }
  }
}
    `;

/**
 * __useFetchPlaceQuery__
 *
 * To run a query within a React component, call `useFetchPlaceQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchPlaceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchPlaceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFetchPlaceQuery(baseOptions: Apollo.QueryHookOptions<FetchPlaceQuery, FetchPlaceQueryVariables> & ({ variables: FetchPlaceQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchPlaceQuery, FetchPlaceQueryVariables>(FetchPlaceDocument, options);
      }
export function useFetchPlaceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchPlaceQuery, FetchPlaceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchPlaceQuery, FetchPlaceQueryVariables>(FetchPlaceDocument, options);
        }
export function useFetchPlaceSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FetchPlaceQuery, FetchPlaceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FetchPlaceQuery, FetchPlaceQueryVariables>(FetchPlaceDocument, options);
        }
export type FetchPlaceQueryHookResult = ReturnType<typeof useFetchPlaceQuery>;
export type FetchPlaceLazyQueryHookResult = ReturnType<typeof useFetchPlaceLazyQuery>;
export type FetchPlaceSuspenseQueryHookResult = ReturnType<typeof useFetchPlaceSuspenseQuery>;
export type FetchPlaceQueryResult = Apollo.QueryResult<FetchPlaceQuery, FetchPlaceQueryVariables>;
export const FetchPlacesDataDocument = gql`
    query FetchPlacesData {
  places {
    id
    name
    description
    pictureUrls
    events {
      id
      name
    }
  }
}
    `;

/**
 * __useFetchPlacesDataQuery__
 *
 * To run a query within a React component, call `useFetchPlacesDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchPlacesDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchPlacesDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchPlacesDataQuery(baseOptions?: Apollo.QueryHookOptions<FetchPlacesDataQuery, FetchPlacesDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchPlacesDataQuery, FetchPlacesDataQueryVariables>(FetchPlacesDataDocument, options);
      }
export function useFetchPlacesDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchPlacesDataQuery, FetchPlacesDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchPlacesDataQuery, FetchPlacesDataQueryVariables>(FetchPlacesDataDocument, options);
        }
export function useFetchPlacesDataSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FetchPlacesDataQuery, FetchPlacesDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FetchPlacesDataQuery, FetchPlacesDataQueryVariables>(FetchPlacesDataDocument, options);
        }
export type FetchPlacesDataQueryHookResult = ReturnType<typeof useFetchPlacesDataQuery>;
export type FetchPlacesDataLazyQueryHookResult = ReturnType<typeof useFetchPlacesDataLazyQuery>;
export type FetchPlacesDataSuspenseQueryHookResult = ReturnType<typeof useFetchPlacesDataSuspenseQuery>;
export type FetchPlacesDataQueryResult = Apollo.QueryResult<FetchPlacesDataQuery, FetchPlacesDataQueryVariables>;