/* eslint-disable @typescript-eslint/ban-ts-comment */
import express from "express"
import { createHandler } from "graphql-http/lib/use/express"
import { buildSchema } from "graphql"
// @ts-ignore
import { ruruHTML } from "ruru/server"
import pgp from 'pg-promise'

const cn = 'postgres://postgres:super-secret-pass@localhost:5432/postgres'

const db = pgp()(cn)

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Project {
    id: ID
    name: String
    country: String
    added_dstamp: String
  }
  type Country {
    name: String
    code: String
    population: Int
    emissionsTons: Float
  }
  type Query {
    project(id: ID): [Project]
    country(name: String): [Country]
  }
`)

// The root provides a resolver function for each API endpoint
const root = {
  project: async ({ id }) => {
    try {
      let result
      if (id) result = await db.query(`select * from projects where id = ${id}`)
      else result = await db.query(`select * from projects`)
      const transform = result.map(project => ({
        ...project,
        added_dstamp: project.added_dstamp.toISOString()
      }))
      return transform
    }
    catch (e ) {
      console.log(e)
    }
  },
  country: async ({ name }) => {
    try {
      let result
      if (name) result = await db.query(`select * from countries where name = $1`, [name])
      else {
        result = await db.query(`select * from countries`)
      }
      return result.map(country => ({
        ...country,
      }))

    }
    catch (e ) {
      console.log(e)
    }
  }
}

const app = express()

// Create and use the GraphQL handler.
app.all(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: root,
  })
)

// Serve the GraphiQL IDE.
app.get("/", (_req, res) => {
  res.type("html")
  res.end(ruruHTML({ endpoint: "/graphql" }))
})

// Start the server at port
app.listen(4000)
console.log("Running a GraphQL API server at http://localhost:4000/graphql")
