'use client';

import NavDetails from "./NavDetails"
import Footer from "./Footer";

export default function PaginaDetails(props: any){

    return (
        <div className="flex flex-col h-screen w-full">
            <NavDetails/>
            <div className="flex-1 flex">
                <main className="p-8">{props.children}</main>
            </div>
            <Footer/>
        </div>
    )

}