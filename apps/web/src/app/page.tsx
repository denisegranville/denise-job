import Search from "./ui/search";
import ProjectsTable from "./ui/projects/table";
import Layout from "./ui/Layout";

const Index = async ({searchParams}: { searchParams?: { query?: string } }) => {
  const query = searchParams?.query || '';

  return (
    <Layout mainTitle={"Projects page"} blurb={'Information about the projects'}>
      <main>
        <Search placeholder={"Country"}/>
        <ProjectsTable query={query}/>
      </main>
    </Layout>
  );
};

export default Index;
