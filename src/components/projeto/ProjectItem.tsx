import Project from "@/data/model/project";
import Image from "next/image";
import Link from "next/link";

interface ProjectItemProps{
    project: Project;
}

export default function ProjectItem(props: ProjectItemProps){
    const {project} = props;
    return(
        
        <Link href={`/projects/${project.id}`}>
        
        <div>
            <h3>{project.name}</h3>
        </div>
        
        </Link>
    )
}