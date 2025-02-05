"use server";

import { esperar } from "./utilits";
import members from "../constants/member";

export default async function getMembersById(id: number){
    await esperar(1000);
    const member = members.find((member) => member.id === id);
    return member;
}