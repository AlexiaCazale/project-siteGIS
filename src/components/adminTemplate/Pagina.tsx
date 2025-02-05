'use client';

import HeaderAdmin from "./Header";
import NavAdmin from "./Nav";
import FooterAdmin from "./Footer";

export default function PaginaAdmin(props: any){
        
    return (
        <div className="flex flex-col h-screen w-screen bg-[#F7DFE9]">
            <HeaderAdmin/>
            <div className="flex-1 flex">
                <NavAdmin/>
                <main className="p-8">{props.children}</main>
            </div>
            <FooterAdmin/>
        </div>
    )
}