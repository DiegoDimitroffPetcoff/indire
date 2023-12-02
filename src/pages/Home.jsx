import { SideBar } from "../components/Common/SideBar";
import { ProjectListByDate } from "../components/Projects/ProjectList/ProjectListByDate";
import  projectListMocks  from "../mocks/projectListMocks.json";
import "../styles/global.css";
export const Home = () => {
  return (
    <>
      <SideBar />
      <ProjectListByDate projectList={projectListMocks}/>
    </>
  );
};
