import PaginaAdmin from "@/components/adminTemplate/Pagina";
import obterProjects from "@/data/service/obterProject";
import getMembers from "@/data/service/getMember";
import Link from "next/link";
import Image from "next/image";
const projects = await obterProjects();
const members = await getMembers();

export default function Admin() {
  return (
    <PaginaAdmin>
      <div className="justfy-center p-5 ml-[25px] w-full">
        {/* <h1>Bem vindo(a)!</h1> */}

        <div id="projects">
          <h1 className="text-start text-[30px] uppercase font-bold mt-[15px]">
            Projetos
          </h1>
          <div className="justify-center mt-5">
            <div className="flex gap-5">
              {projects &&
                projects.map((project) => (
                  <div className="w-[300px] h-[300px] bg-[#C7A2EC] rounded-[6px]">
                    <div className="text-center p-2 list-inside decimal">
                      <h2 className=" font-bold py-1 px-1">{project.name}</h2>
                      <p className="text-start py-2 px-1">{project.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div id="members" className="mt-[30px]">
          <h1 className="text-start text-[30px] uppercase font-bold">
            Membros
          </h1>
          <div className="justify-center mt-5">
            <div className="flex gap-5">
              {members.map((member) => (
                <div className="w-[300px] h-[100px] bg-[#C7A2EC] rounded-[6px]">
                <div className="text-center p-2 list-inside decimal">
                  <h2 className="font-bold py-1 px-1">{member.name}</h2>
                  <p className="py-2 px-1">{member.description}</p>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PaginaAdmin>
  );
}
