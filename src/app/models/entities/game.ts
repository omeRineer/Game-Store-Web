import { BaseEntity } from "./baseEntity";
import { Category } from "./category";
import { Media } from "./media";

export class Game extends BaseEntity{
    name: string;
    description:string;
    content:string;
    price:number;
    releaseDate:Date;
    
    coverImage:Media;
    category:Category;
}