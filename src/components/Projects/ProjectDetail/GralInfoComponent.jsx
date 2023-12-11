import LogoImage from "../../../assets/INDIRE_LOGO.PNG";
import  "./ProjectDetail.css";
export const GralInfoComponent = ({ GralInfoMock }) => {
  return (
    <article>
      <figure>
        <img src={LogoImage} alt="INDIRE LOGO" />
      </figure>
      <h1>{GralInfoMock.title}</h1>
      <address>{GralInfoMock.address}</address>
      <img src={GralInfoMock.main_img_url} alt="imagen" />
      <h2>{GralInfoMock.sub_title}</h2>
      <span>{GralInfoMock.date}</span>
      <p>{GralInfoMock.project_number}</p>
    </article>
  );
};
