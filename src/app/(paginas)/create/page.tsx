import PaginaAdmin from "@/components/adminTemplate/Pagina";
import Link from "next/link";

export default function PaginaCreate() {
  return (
    <PaginaAdmin>
      <div className="justfy-center text-center p-5 ml-[25px]">
        <div id="projects">
          <h1 className="text-start text-[30px] uppercase font-bold mt-[15px]">
            Adicionar projetos
          </h1>
          <button>
            <Link href="/create/formsProject">Adicionar</Link>
          </button>
        </div>
        <div id="members">
          <h1 className="text-start text-[30px] uppercase font-bold mt-[15px]">
            Adicionar membros
          </h1>
        </div>
      </div>
    </PaginaAdmin>
  );
}
