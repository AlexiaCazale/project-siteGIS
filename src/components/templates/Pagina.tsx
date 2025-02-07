'use client';

import Nav from "./Nav";
import Footer from "./Footer";

export default function Pagina(props: any){

    return (
        <div className="flex flex-col h-screen w-full">
            <Nav/>
            <div className="flex-1 flex">
                <main className="p-8">{props.children}</main>
            </div>
            <Footer/>
        </div>
    )

}