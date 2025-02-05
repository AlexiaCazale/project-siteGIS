import ProjectDetails from "@/components/projeto/ProjectDetails"
import obterProjectsById from "@/data/service/obterProjectById"
import Link from "next/link"

export default async function PaginaProjectsById(props: any){
    const project = await obterProjectsById(+props.params.id)
    if(!project) return <div>Projeto não encontrado!</div>
    return (
        <div className="flex flex-col gap-5">
            <ProjectDetails project={project}/>
            {/* <Link href="/#projects" className="self-center botao">Voltar</Link> */}
        </div>
    )
}