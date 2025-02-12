import { esperar } from "./utilits";
import members from "../constants/member";

export default async function getMembers(){
    await esperar(1000);
    return members;
}