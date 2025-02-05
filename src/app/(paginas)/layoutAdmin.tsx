import PaginaAdmin from "@/components/adminTemplate/Pagina"

export default function LayoutAdmin(props: any){
    return(
        <PaginaAdmin>{props.children}</PaginaAdmin>
    )
}