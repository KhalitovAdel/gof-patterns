import {KitchenType} from "../enum/kitchen-type.enum";
import {IClass} from "../../../interface/class";
import {IDish} from "../../../bridge/interface/dish.interface";

export interface IKitchen {
    createTraditionalDish(): IDish[];
    createOtherDish(): IDish[];
}

export type IKitchenMap = Map<KitchenType, IClass<IKitchen>>;
