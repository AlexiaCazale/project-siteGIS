import Member from "@/data/model/member";
import Image from "next/image";

interface MemberItemProps{
    member: Member;
}

export default function MemberItem(props: MemberItemProps){
    const {member} = props;
    return(
        <div>
            <h3>{member.name}</h3>
        </div>
    )
}