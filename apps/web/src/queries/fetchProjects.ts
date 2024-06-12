import { gql } from '@apollo/client'
import { TypedDocumentNode } from '@graphql-typed-document-node/core'
import type { Project } from '../types'

export const GET_PROJECTS: TypedDocumentNode<{
  project: Array<Project>
}> = gql`
  query {
    project {
      name
      country
      id
      added_dstamp
    }
  }
`

export const GET_PROJECT_BY_ID: TypedDocumentNode<{ project: Project }, { id: number }> = gql`
  query GetProjectById($id: ID!) {
    project(id: $id) {
      name
      country
      id
      added_dstamp
    }
  }
`
