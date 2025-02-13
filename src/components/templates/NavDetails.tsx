'use client';

import NavItem from "./NavItem";
import { FaBars } from 'react-icons/fa';
import { useState } from 'react'

export default function NavDetails(){

    const [openMenu, setOpenMenu] = useState<boolean>(false);

    return (
        <aside className="flex justify-between items-center bg-gradient-to-r from-[#bf4e83e1] to-[#000a90d4] px-6 py-5 text-white uppercase font-bold fixed top-0 left-0 w-full">

            <div className="flex items-center gap-2">
                <span className="font-white">{"< Girls in STEM /> "}</span>
            </div>

            <nav className={`sm:flex ${openMenu ? 'flex-col absolute items-center top-[60px] left-0 w-[100%] bg-gradient-to-r from-[#bf4e83e1] to-[#000a90d4] text-white p-2'  : 'hidden'} flex justify-center items-right gap-2`}>

                <NavItem text="Sobre" href="" />

                <NavItem text="Fotos" href="#fotos" />

            </nav>

            <button className="block md:hidden" onClick={() => setOpenMenu(!openMenu)}>
                <FaBars/>
            </button>
        </aside>
    )
}