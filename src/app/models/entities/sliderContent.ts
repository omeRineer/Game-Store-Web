import { BaseEntity } from "./baseEntity";
import { Media } from "./media";
import { TypeLookup } from "./typeLookup";

export class SliderContent extends BaseEntity{
    header:string;
    to:string;
    priority:number;
    isActive:boolean;
    coverImage:Media;
    sliderType:TypeLookup;
}