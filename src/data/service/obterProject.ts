import { esperar } from "./utilits";
import projects from "../constants/project";

export default async function obterProjects(){
    await esperar(1000);
    return projects;
}