import {DishType} from "./dish-type.enum";
import {IClass} from "../../../interface/class";

export interface IStoveCreateDish {
    create(): unknown
}

export type DishMap = Map<DishType, IClass<IStoveCreateDish>>
