'use client';

import PaginaAdmin from "@/components/adminTemplate/Pagina";
import { useState } from "react";

export default function Layout(props: any){
    const [data] = useState(new Date().toLocaleTimeString())
    return(
        <PaginaAdmin>
            <div className="border-8 border-red-500 p-8">
                <span>{data}</span>
                <main>{props.children}</main>
            </div>
        </PaginaAdmin>
    )
}