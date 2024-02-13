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

export type CreateEventMutationVariables = Exact<{
  name: Scalars['String']['input'];
  description: Scalars['String']['input'];
  placeId: Scalars['ID']['input'];
}>;


export type CreateEventMutation = { __typename?: 'Mutation', createEvent?: { __typename?: 'Event', id: string, name?: string | null, description?: string | null, pictureUrls?: Array<string> | null, place?: { __typename?: 'Place', id: string, name?: string | null } | null } | null };

export type CreatePlaceMutationVariables = Exact<{
  name: Scalars['String']['input'];
  description: Scalars['String']['input'];
}>;


export type CreatePlaceMutation = { __typename?: 'Mutation', createPlace?: { __typename?: 'Place', id: string, name?: string | null, description?: string | null, pictureUrls?: Array<string> | null, events?: Array<{ __typename?: 'Event', id: string, name?: string | null }> | null } | null };

export type DeleteEventMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteEventMutation = { __typename?: 'Mutation', deleteEvent?: string | null };

export type DeletePlaceMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeletePlaceMutation = { __typename?: 'Mutation', deletePlace?: string | null };

export type UpdateEventMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  placeId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type UpdateEventMutation = { __typename?: 'Mutation', updateEvent?: { __typename?: 'Event', id: string, name?: string | null, description?: string | null, pictureUrls?: Array<string> | null, place?: { __typename?: 'Place', id: string, name?: string | null } | null } | null };

export type UpdatePlaceMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdatePlaceMutation = { __typename?: 'Mutation', updatePlace?: { __typename?: 'Place', id: string, name?: string | null, description?: string | null, pictureUrls?: Array<string> | null, events?: Array<{ __typename?: 'Event', id: string, name?: string | null }> | null } | null };

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

export type FetchPlacesDdQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchPlacesDdQuery = { __typename?: 'Query', places: Array<{ __typename?: 'Place', id: string, name?: string | null }> };

export type FetchPlacesDataQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchPlacesDataQuery = { __typename?: 'Query', places: Array<{ __typename?: 'Place', id: string, name?: string | null, description?: string | null, pictureUrls?: Array<string> | null, events?: Array<{ __typename?: 'Event', id: string, name?: string | null }> | null }> };


export const CreateEventDocument = gql`
    mutation CreateEvent($name: String!, $description: String!, $placeId: ID!) {
  createEvent(name: $name, description: $description, placeId: $placeId) {
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
export type CreateEventMutationFn = Apollo.MutationFunction<CreateEventMutation, CreateEventMutationVariables>;

/**
 * __useCreateEventMutation__
 *
 * To run a mutation, you first call `useCreateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventMutation, { data, loading, error }] = useCreateEventMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      placeId: // value for 'placeId'
 *   },
 * });
 */
export function useCreateEventMutation(baseOptions?: Apollo.MutationHookOptions<CreateEventMutation, CreateEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEventMutation, CreateEventMutationVariables>(CreateEventDocument, options);
      }
export type CreateEventMutationHookResult = ReturnType<typeof useCreateEventMutation>;
export type CreateEventMutationResult = Apollo.MutationResult<CreateEventMutation>;
export type CreateEventMutationOptions = Apollo.BaseMutationOptions<CreateEventMutation, CreateEventMutationVariables>;
export const CreatePlaceDocument = gql`
    mutation CreatePlace($name: String!, $description: String!) {
  createPlace(name: $name, description: $description) {
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
export type CreatePlaceMutationFn = Apollo.MutationFunction<CreatePlaceMutation, CreatePlaceMutationVariables>;

/**
 * __useCreatePlaceMutation__
 *
 * To run a mutation, you first call `useCreatePlaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlaceMutation, { data, loading, error }] = useCreatePlaceMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreatePlaceMutation(baseOptions?: Apollo.MutationHookOptions<CreatePlaceMutation, CreatePlaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePlaceMutation, CreatePlaceMutationVariables>(CreatePlaceDocument, options);
      }
export type CreatePlaceMutationHookResult = ReturnType<typeof useCreatePlaceMutation>;
export type CreatePlaceMutationResult = Apollo.MutationResult<CreatePlaceMutation>;
export type CreatePlaceMutationOptions = Apollo.BaseMutationOptions<CreatePlaceMutation, CreatePlaceMutationVariables>;
export const DeleteEventDocument = gql`
    mutation DeleteEvent($id: ID!) {
  deleteEvent(id: $id)
}
    `;
export type DeleteEventMutationFn = Apollo.MutationFunction<DeleteEventMutation, DeleteEventMutationVariables>;

/**
 * __useDeleteEventMutation__
 *
 * To run a mutation, you first call `useDeleteEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEventMutation, { data, loading, error }] = useDeleteEventMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteEventMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEventMutation, DeleteEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEventMutation, DeleteEventMutationVariables>(DeleteEventDocument, options);
      }
export type DeleteEventMutationHookResult = ReturnType<typeof useDeleteEventMutation>;
export type DeleteEventMutationResult = Apollo.MutationResult<DeleteEventMutation>;
export type DeleteEventMutationOptions = Apollo.BaseMutationOptions<DeleteEventMutation, DeleteEventMutationVariables>;
export const DeletePlaceDocument = gql`
    mutation DeletePlace($id: ID!) {
  deletePlace(id: $id)
}
    `;
export type DeletePlaceMutationFn = Apollo.MutationFunction<DeletePlaceMutation, DeletePlaceMutationVariables>;

/**
 * __useDeletePlaceMutation__
 *
 * To run a mutation, you first call `useDeletePlaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePlaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePlaceMutation, { data, loading, error }] = useDeletePlaceMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePlaceMutation(baseOptions?: Apollo.MutationHookOptions<DeletePlaceMutation, DeletePlaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePlaceMutation, DeletePlaceMutationVariables>(DeletePlaceDocument, options);
      }
export type DeletePlaceMutationHookResult = ReturnType<typeof useDeletePlaceMutation>;
export type DeletePlaceMutationResult = Apollo.MutationResult<DeletePlaceMutation>;
export type DeletePlaceMutationOptions = Apollo.BaseMutationOptions<DeletePlaceMutation, DeletePlaceMutationVariables>;
export const UpdateEventDocument = gql`
    mutation UpdateEvent($id: ID!, $name: String, $description: String, $placeId: ID) {
  updateEvent(id: $id, name: $name, description: $description, placeId: $placeId) {
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
export type UpdateEventMutationFn = Apollo.MutationFunction<UpdateEventMutation, UpdateEventMutationVariables>;

/**
 * __useUpdateEventMutation__
 *
 * To run a mutation, you first call `useUpdateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEventMutation, { data, loading, error }] = useUpdateEventMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      placeId: // value for 'placeId'
 *   },
 * });
 */
export function useUpdateEventMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEventMutation, UpdateEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEventMutation, UpdateEventMutationVariables>(UpdateEventDocument, options);
      }
export type UpdateEventMutationHookResult = ReturnType<typeof useUpdateEventMutation>;
export type UpdateEventMutationResult = Apollo.MutationResult<UpdateEventMutation>;
export type UpdateEventMutationOptions = Apollo.BaseMutationOptions<UpdateEventMutation, UpdateEventMutationVariables>;
export const UpdatePlaceDocument = gql`
    mutation UpdatePlace($id: ID!, $name: String, $description: String) {
  updatePlace(id: $id, name: $name, description: $description) {
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
export type UpdatePlaceMutationFn = Apollo.MutationFunction<UpdatePlaceMutation, UpdatePlaceMutationVariables>;

/**
 * __useUpdatePlaceMutation__
 *
 * To run a mutation, you first call `useUpdatePlaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePlaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePlaceMutation, { data, loading, error }] = useUpdatePlaceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useUpdatePlaceMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePlaceMutation, UpdatePlaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePlaceMutation, UpdatePlaceMutationVariables>(UpdatePlaceDocument, options);
      }
export type UpdatePlaceMutationHookResult = ReturnType<typeof useUpdatePlaceMutation>;
export type UpdatePlaceMutationResult = Apollo.MutationResult<UpdatePlaceMutation>;
export type UpdatePlaceMutationOptions = Apollo.BaseMutationOptions<UpdatePlaceMutation, UpdatePlaceMutationVariables>;
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
export const FetchPlacesDdDocument = gql`
    query FetchPlacesDD {
  places {
    id
    name
  }
}
    `;

/**
 * __useFetchPlacesDdQuery__
 *
 * To run a query within a React component, call `useFetchPlacesDdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchPlacesDdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchPlacesDdQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchPlacesDdQuery(baseOptions?: Apollo.QueryHookOptions<FetchPlacesDdQuery, FetchPlacesDdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchPlacesDdQuery, FetchPlacesDdQueryVariables>(FetchPlacesDdDocument, options);
      }
export function useFetchPlacesDdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchPlacesDdQuery, FetchPlacesDdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchPlacesDdQuery, FetchPlacesDdQueryVariables>(FetchPlacesDdDocument, options);
        }
export function useFetchPlacesDdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FetchPlacesDdQuery, FetchPlacesDdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FetchPlacesDdQuery, FetchPlacesDdQueryVariables>(FetchPlacesDdDocument, options);
        }
export type FetchPlacesDdQueryHookResult = ReturnType<typeof useFetchPlacesDdQuery>;
export type FetchPlacesDdLazyQueryHookResult = ReturnType<typeof useFetchPlacesDdLazyQuery>;
export type FetchPlacesDdSuspenseQueryHookResult = ReturnType<typeof useFetchPlacesDdSuspenseQuery>;
export type FetchPlacesDdQueryResult = Apollo.QueryResult<FetchPlacesDdQuery, FetchPlacesDdQueryVariables>;
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