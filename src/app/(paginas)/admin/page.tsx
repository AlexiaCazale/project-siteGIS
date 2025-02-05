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
      <div className="justfy-center text-center p-5 ml-[25px]">
        {/* <h1>Bem vindo(a)!</h1> */}

        <div id="projects">
          <h1 className="text-start text-[30px] uppercase font-bold mt-[15px]">Projetos</h1>
          <div className="flex justify-center">
            <div className="flex">
              {projects &&
                projects.map((project) => (
                  <div className="w-[160px] h-[240px] mt-[10px] mr-[15px]">
                    <Link href={`/projects/${project.id}`}>
                      <div>
                        <div className="relative w-[160px] h-[240px] rounded-[8px] mt-[10px] mr-[15px] text-center bg-[#ffb4b4]">
                          <Image
                            src={project.image}
                            className="rounded-[8px] bg-[#BF4E83] h-[240px] w-[160px] object-cover opacity-35"
                            alt="capa"
                            width={160}
                            height={240}
                          />
                          <h3 className="absolute top-[25%] bottom-[50%] font-arya text-[25px] text-center mt-[10px] text-black font-bold">
                            {project.name}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div id="members" className="mt-[30px]">
          <h1 className="text-start text-[30px] uppercase font-bold">Membros</h1>
          <div className="flex justify-center">
            <div className="flex justify-center w-[200px]">
              {members.map((member) => (
                <div className="member">
                  <div className="w-[180px] h-[180px] rounded-full mt-[10px] mr-[15px] text-center bg-[#ffb4b4]"></div>
                  <h3
                    key={member.id}
                    className="mt-[10px] mr-[15px] text-center text-black font-bold font-arya text-[22px]"
                  >
                    {member.name}
                  </h3>
                  <h5
                    key={member.id}
                    className="mt-[10px] mr-[15px] text-center text-black"
                  >
                    {member.description}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PaginaAdmin>
  );
}
