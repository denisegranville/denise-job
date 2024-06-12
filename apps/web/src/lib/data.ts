import {GET_PROJECT_BY_ID, GET_PROJECTS} from "../queries/fetchProjects";
import {GET_COUNTRIES, GET_COUNTRY_BY_NAME} from "../queries/fetchCountries";
import {getClient} from "../graphQLClient";
import {Project} from "../types";

const {query} = getClient();

export async function fetchAllCountries() {
  const [allCountries] = await Promise.all([
    await query({query: GET_COUNTRIES}),
  ]);
  return allCountries.data.country;
}

export async function fetchAllProjects() {
  const [allProjects] = await Promise.all([
    await query({
      query: GET_PROJECTS,
      fetchPolicy: 'network-only', // Ensure fresh data fetching
    }),
  ]);
  return allProjects.data.project;
}

export async function fetchAllProjectsByCountry(searchParams: string) {
  const [allProjects] = await Promise.all([
    await query({
      query: GET_PROJECTS,
      fetchPolicy: 'network-only', // Ensure fresh data fetching
    }),
  ]);
  const filteredProjects = allProjects.data.project.filter((project: Project) => {
    return project.country.toLowerCase() === searchParams
  });
  return filteredProjects;
}

export async function fetchProjectById(id: number) {
  const result = await query({
    query: GET_PROJECT_BY_ID,
    variables: {id: id},
    fetchPolicy: 'network-only', // Ensure fresh data fetching
  });

  const project = Array.isArray(result.data.project) ? result.data.project[0] : result.data.project;
  return project;
}

export async function fetchCountryByName(name: string) {
  const result = await query({
    query: GET_COUNTRY_BY_NAME,
    variables: {name: name}
  });

  const country = Array.isArray(result.data.country) ? result.data.country[0] : result.data.country;
  return country;
}
