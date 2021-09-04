import {DishType} from "./interface/dish-type.enum";
import {DishMap, IStoveCreateDish} from "./interface/stove.interface";
import {Soup} from "../dishes/soup";
import {Cake} from "../dishes/cake";
import {IClass} from "../../interface/class";

export const ProductMap: DishMap =  new Map<DishType, IClass<IStoveCreateDish>>([
    [DishType.SOUP, Soup],
    [DishType.CAKE, Cake],
]);
