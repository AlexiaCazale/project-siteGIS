'use server';

import { esperar } from "./utilits";
import projects from "../constants/project";

export default async function obterProjectsById(id: number){
    await esperar(1000);
    const project = projects.find((project) => project.id === id);
    return project;
}