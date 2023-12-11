import { GralInfoComponent } from "../components/Projects/ProjectDetail/GralInfoComponent";
import  GralInfoMock  from "../mocks/GralInfoMock.json"
export const ProjectDitailPage = () =>{
    return(
        <>
        Project Page
        <GralInfoComponent GralInfoMock={GralInfoMock} />
        </>
    )
}