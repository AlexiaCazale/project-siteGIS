import Link from "next/link"

interface NavItemProps{
    text: string
    href: string
}

export default function NavItem(props: NavItemProps){
    return (
        <div className="flex items-center gap-1 px-2 text-white uppercase font-bold">
           
            <Link href={props.href} className="text-sm">
                {props.text}
            </Link>
        </div>
    )
}