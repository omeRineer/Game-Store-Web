import { BaseEntity } from "./baseEntity";
import { Category } from "./category";
import { GameImage } from "./gameImage";

export class Game extends BaseEntity{
    name: string;
    description:string;
    content:string;
    price:number;
    releaseDate:Date;
    coverImage:string;
    images:GameImage[]
    
    category:Category;
}