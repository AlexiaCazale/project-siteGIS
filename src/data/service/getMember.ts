import { esperar } from "./utilits";
import members from "../constants/member";

export default async function getMembers(){
    await esperar(2000);
    return members;
}