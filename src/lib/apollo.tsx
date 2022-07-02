import { createHttpLink, ApolloClient, InMemoryCache } from '@apollo/client'

const link = createHttpLink({
  uri: "https://api.spacex.land/graphql",
})

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  ssrMode: typeof window === 'undefined'
})
