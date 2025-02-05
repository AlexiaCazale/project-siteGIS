import Image from "next/image";
import explorador from '@/assets/erro.png';
import Link from "next/link";

export default function Pagina404(){
    return (
        <div className="h-screen flex flex-col justify-center items-center gap-7 text-center">

        <Image src={explorador} alt="Erro 404" width={400}/>

        <h1 className="text-black font-bahianita text-center text-[50px]">A página que você está <span className="text-[#FF0000]">não existe!</span></h1>

        <Link href="/" className="bg-gradient-to-r from-[#BF4E83] to-[#000A90] py-2 px-4 rounded-md text-white uppercase font-bold">Voltar</Link>

        </div>
    )
}