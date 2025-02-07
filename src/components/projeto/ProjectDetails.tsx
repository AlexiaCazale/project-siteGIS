import PaginaDetails from "../templates/PaginaDetails";
import Project from "@/data/model/project";
import Image from "next/image";
import SecondFlower from "@/assets/secondFlower.png";
import Link from "next/link";

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails(props: ProjectDetailsProps) {
  const { project } = props;
  return (
    <PaginaDetails>
      <div className="mt-[100px] w-[80%] ml-auto mr-auto 2xl, xl, lg, md:flex justify-center items-center" id="welcome">
        <div className="flex justify-center">
          <Image
            src={SecondFlower}
            alt="flor"
            className="2xl:w-[360px] xl:w-[300px] lg:w-[250px] md:w-[220px] w-[150px]"
          />
        </div>
        <div className="text-center 2xl, xl, lg, md:text-left 2xl, xl, lg, md:w-[50%] 2xl, xl, lg, md:ml-[2%]">
          <h1 className="text-[45px] 2xl:text-[75px] xl:text-[60px] lg:text-[50px] md:text-[35px] text[20px] font-bahianita">
            {project.name}
          </h1>
          <p className="2xl:text-[25px] lg:text-[18px] md:text-[14px]">{project.description}</p>
          <br />
          {/* <button className="bg-gradient-to-r from-[#bf4e83e1] to-[#000a90d4] px-6 py-2 text-white uppercase font-bold rounded-md">
            <Link href="/">Voltar</Link>
          </button> */}
        </div>
      </div>

      <div>
        <h1 className="text-center text-[45px] 2xl:text-[75px] xl:text-[50px] lg:text-[40px] font-bahianita md:text-[30px]" id="fotos">
          Galeria de fotos
        </h1>
        <div></div>
        <div className="flex justify-center mb-[20px]">
          <button className="bg-gradient-to-r from-[#bf4e83e1] to-[#000a90d4] px-6 py-2 text-white uppercase font-bold rounded-md">
            <Link href="/#projects">Voltar</Link>
          </button>
        </div>
      </div>
    </PaginaDetails>
  );
}
