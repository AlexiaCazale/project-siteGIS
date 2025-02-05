import Link from "next/link"

interface NavItemProps{
    icon?: any
    text: string
    href: string
}

export default function NavItemAdmin(props: NavItemProps){
    
    return (
        <div className="flex items-center gap-2 p-2 hover:bg-[#000A90]/30 hover:rounded-md">
            <props.icon size={22} stroke={1.5} />
            <Link href={props.href} className="text-md">
                {props.text}
            </Link>
        </div>
    )
}