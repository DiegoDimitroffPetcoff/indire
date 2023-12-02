import { Header } from "../components/Common/Header";
import { SideBar } from "../components/Common/SideBar";
import { ProjectListByDate } from "../components/Projects/ProjectList/ProjectListByDate";
import "../styles/global.css";
export const Home = () => {
  return (
    <>      
      <Header />
      <SideBar />
      <ProjectListByDate />
    </>
  );
};
