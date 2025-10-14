import { BaseEntity } from "./baseEntity";
import { TypeLookup } from "./typeLookup";

export class SliderContent extends BaseEntity{
    header:string;
    to:string;
    priority:number;
    isActive:boolean;
    coverImage:string;
    sliderType:TypeLookup;
}