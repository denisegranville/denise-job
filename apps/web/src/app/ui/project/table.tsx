import {fetchCountryByName, fetchProjectById} from "../../../lib/data";
import Link from "next/link";
import {formatDate} from "date-fns";

type ProjectTableProps = {
  projectId: number;
};

const ProjectTable = async ({projectId}: ProjectTableProps) => {

  const project = await fetchProjectById(projectId);
  const country = await fetchCountryByName(project.country);

  return (
    <div>
      <table className="table-auto">
        <thead>
        <tr className="">
          <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50 ">
            Project ID
          </th>
          <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50 ">
            Project Name
          </th>
          <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50  ">
            Country name
          </th>
          <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50 ">
            Date Added
          </th>
          <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50  ">
            Country code
          </th>
          <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50  ">
            Population
          </th>
          <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50  ">
            Emmissions
          </th>
        </tr>
        </thead>
        <tbody className="even:bg-violet-200 odd:bg-violet-300">
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
          <Link key={project.id} href={`/?query=${project.country}`} legacyBehavior>
            <td className="p-4 border-b border-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                {project.country}
              </p>
            </td>
          </Link>
          <td className="p-4 border-b border-blue-gray-50">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              {formatDate(project.added_dstamp, 'dd/MM/yyyy')}
            </p>
          </td>
          <td className="p-4 border-b border-blue-gray-50">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              {country.code}
            </p>
          </td>
          <td className="p-4 border-b border-blue-gray-50">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              {country.population}
            </p>
          </td>
          <td className="p-4 border-b border-blue-gray-50">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              {country.emissionsTons}
            </p>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}
export default ProjectTable;

