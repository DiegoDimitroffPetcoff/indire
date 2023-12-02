import { Header } from "../components/Common/Header";
import { SideBar } from "../components/Common/SideBar";
import { ProjectListByDate } from "../components/Projects/ProjectList/ProjectListByDate";

export const Home = () => {
  return (
    <>      
      <Header />
      <SideBar />
      <ProjectListByDate />
    </>
  );
};
