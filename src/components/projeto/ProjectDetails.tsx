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
      <div className="mt-[90px] flex justify-center" id="welcome">
        <div className="flower">
          <Image
            src={SecondFlower}
            alt="flor"
            width={400}
            className="mr-[20px]"
          />
        </div>
        <div className="text-left w-[50%] mt=[70px]">
          <h1 className="text-[70px] font-bahianita mt-[50px]">
            {project.name}
          </h1>
          <p>{project.description}</p>
          <br />
          {/* <button className="bg-gradient-to-r from-[#bf4e83e1] to-[#000a90d4] px-6 py-2 text-white uppercase font-bold rounded-md">
            <Link href="/">Voltar</Link>
          </button> */}
        </div>
      </div>

      <div>
        <h1 className="text-center text-[50px] font-bahianita w-screen" id="fotos">
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
