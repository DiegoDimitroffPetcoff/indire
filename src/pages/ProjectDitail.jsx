import { GralInfoComponent } from "../components/Projects/ProjectDetail/GralInfoComponent";
import GralInfoMock from "../mocks/GralInfoMock.json";
export const ProjectDitailPage = () => {
  return (
    <>
      <div class="container">
        ProjectDitailPage
        <GralInfoComponent GralInfoMock={GralInfoMock} />
      </div>
    </>
  );
};
