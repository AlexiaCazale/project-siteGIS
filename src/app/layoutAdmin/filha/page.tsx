import Link from "next/link";

export default function PaginaFilhaComLayout() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center text-2xl">

        <h1>Conteúdo da página FILHA</h1>

        <div className="flex gap-5">
            <Link href="/layout" className="botao">Voltar</Link>
            <Link href="/" className="botao">Início</Link>
        </div>
    </div>
  )
}
