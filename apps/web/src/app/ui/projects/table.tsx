import {fetchAllCountries, fetchAllProjects, fetchAllProjectsByCountry} from "../../../lib/data";
import {formatDate} from "date-fns";
import Link from "next/link";


const ProjectsTable = async ({query}) => {
  const [projects, countries] = await Promise.all([
    query ? fetchAllProjectsByCountry(query.toLowerCase()): fetchAllProjects(),
    fetchAllCountries()
  ])
  const countryMap = new Map(countries.map(country => [country.name, country]));
  return (
    <table className="table-auto">
      <thead>
      <tr className="">
        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50 ">
            ID
        </th>
        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50 ">
            Name
        </th>
        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50  ">
            Country
        </th>
        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50  ">
            Emmissions
        </th>
        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50 ">
            Date
        </th>
      </tr>
      </thead>
      <tbody className="even:bg-violet-200 odd:bg-violet-300">
      {
        projects.map(project =>
          <Link key={project.id} href={`/project-${project.id}`} legacyBehavior>
            <tr className="hover:bg-violet-400 ">
              <td className="p-4 border-b border-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  {project.id}
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  {project.name}
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  {project.country}
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  {countryMap.get(project.country)?.emissionsTons}
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  {formatDate(project.added_dstamp, 'dd/MM/yyyy')}
                </p>
              </td>
            </tr>
          </Link>
        )
      }
      </tbody>
    </table>
  );
}
export default ProjectsTable;

