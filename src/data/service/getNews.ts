import { esperar } from "./utilits";
import news from "../constants/news";

export default async function getNews(){
    await esperar(1000);
    return news;
}