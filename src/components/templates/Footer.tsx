export default function Footer(){
    return (
    <footer className="flex items-center justify-center bg-gradient-to-r from-[#BF4E83] to-[#000A90] px-6 py-3 text-white uppercase font-bold w-full">
        <span className="text-white-200 text-sm text-center">Todos os direitos reservados &copy; {new Date().getFullYear()}</span>
    </footer>
    )
}