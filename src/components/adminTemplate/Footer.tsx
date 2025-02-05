export default function FooterAdmin(){
    
    return (
        <footer className="flex justify-center bg-gradient-to-r from-[#bf4e83e1] to-[#000a90d4] px-6 py-3">
            <span className="text-white text-center">Todos os direitos reservados &copy; {new Date().getFullYear()}</span>
        </footer>
    )
}