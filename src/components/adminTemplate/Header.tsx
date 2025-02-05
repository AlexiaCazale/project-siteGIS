// import { IconBrandReact } from "@tabler/icons-react";

export default function  HeaderAdmin(){
    
    return (
        <header className="flex justify-between items-center bg-gradient-to-r from-[#bf4e83e1] to-[#000a90d4] px-6 py-3">
            <div className="flex items-center gap-2">
                {/* <IconBrandReact size={36} stroke={1} className="text-blue-400"/> */}
                <span className="text-white font-bold p-2 uppercase">Girls in STEM - Admin</span>
            </div>
        </header>
    )
}   