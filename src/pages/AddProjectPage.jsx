import { SideBar } from "../components/Common/SideBar";
import { AddProject } from "../components/Projects/AddProject/AddProject";
import { GralInfoComponent } from "../components/Projects/ProjectDetail/GralInfoComponent";
import "../styles/global.css";
export const AddProjectPage = () => {
  return (
    <>
      <SideBar />
      <div className="container">
        <AddProject GralInfoComponent={GralInfoComponent} />
      </div>
    </>
  );
};
