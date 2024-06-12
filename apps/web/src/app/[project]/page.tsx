import React from "react";
import ProjectTable from "../ui/project/table";
import Layout from "../ui/Layout";

const Page = async ({params}) => {
  const idWithoutProject = params.project.substring("project-".length)
  return (
    <Layout mainTitle={'Project View'} blurb={`Information about project-${idWithoutProject}`}>
      <div>
        <ProjectTable projectId={idWithoutProject}/>
      </div>
    </Layout>
  );
}

export default Page;
