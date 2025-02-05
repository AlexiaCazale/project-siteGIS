import NavItem from "./NavItem";

export default function NavDetails(){
    return (
        <aside className="flex justify-between items-center bg-gradient-to-r from-[#bf4e83e1] to-[#000a90d4] px-6 py-5 text-white uppercase font-bold fixed top-0 left-0 w-screen">

            <div className="flex items-center gap-2">
                <span className="font-white">Girls in STEM</span>
            </div>

            <nav className="flex justify-center items-right gap-2">

                <NavItem text="Sobre" href="" />

                <NavItem text="Fotos" href="#fotos" />

            </nav>
        </aside>
    )
}