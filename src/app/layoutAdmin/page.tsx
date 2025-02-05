import Link from "next/link";

export default function PaginaComLayout() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center text-2xl">
        <h1>Conteúdo da página RAÍZ</h1>
        <Link href="/layout/filha" className="botao">Ir para a página FILHA</Link>
    </div>
  )
}

