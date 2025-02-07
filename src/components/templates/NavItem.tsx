
import Link from "next/link"

interface NavItemProps{
    text: string
    href: string
}

export default function NavItem(props: NavItemProps){
    return (
        <div className="flex items-center gap-1 px-2 text-white uppercase font-bold border-b-2 border-transparent hover:border-[#A96BE6] active:border-[#A96BE6] transition-colors duration-300">
           
            <Link href={props.href} className={`text-md 2xl:text-xlg lg:text-lg md:text-md`}>
                {props.text}
            </Link>
        </div>
    )
}