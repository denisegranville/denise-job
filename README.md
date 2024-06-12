# LeadTest

## Task

You've been given this set of requirements by the PM...

Product Requirements:

>  We've got a data dump of [country data](./countries.csv) which we'd ingested into the database and exposed on the graphQL endpoint for the clients. 
>  The app should show the number of emissions for the country next to the country in the table.
>  We'd like to be able to click on an entry and be taken to a page which shows all of the data we have for that project, the URL should be the project + project id e.g. /project-2. 
>  When you hover over the project row, the background of the row should get a few shades darker to let the user know they can click on it. 
>  The web page should update within half an hour if the data changes from the API. 
>  We should be able to select a specific country and its associated projects from the endpoint.

Implement the changes required and let us know what questions or clarifications you would ask the PM or concerns you might have before taking on the development in the README. 

## Tech Information

The test involves three systems:
* Postgres (Dockerised)
* Express app which exposes GraphQL endpoint
* NextJS Frontend app

### Postgres

Ensure Docker is running
Run `docker-compose up -d` to start Postgres DB
Exposes Adminner frontend on 8080
Exposes Postgres on 5432

### Express

Run `npm start api` to initialise
GraphQL endpoints exposed on 4000/graphql

### NextJS

Run `npm start web` to initialise
Runs on 3001


### Assumptions

1) Good API design would have had the project url be https://localhost:3001/projects/2 instead of https://localhost:3001/project-2.  
2) The data dump was added to the docker script, this would normally be done in a migration script.
3) I am not validating the data in the CSV file
4) I would use ZOD to validate the endpoint data. For example, the country name should be a string and the emissions should be a number.
5) The GraphQL endpoint should be paginated.
6) The GraphQL schema is not properly defined. I need to look in the types and query more. 
