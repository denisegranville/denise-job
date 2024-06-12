import { gql } from '@apollo/client'
import { TypedDocumentNode } from '@graphql-typed-document-node/core'
import type { Country } from '../types'

export const GET_COUNTRIES: TypedDocumentNode<{
  country: Array<Country>
}> = gql`
  query {
    country {
      name
      code
      population
      emissionsTons
    }
  }
`

export const GET_COUNTRY_BY_NAME: TypedDocumentNode<{ country: Country }, { name: string }> = gql`
  query GetCountryByName($name: String!) {
    country(name: $name) {
      name
      code
      population
      emissionsTons
    }
  }
`
