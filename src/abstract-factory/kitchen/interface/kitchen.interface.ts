import {KitchenType} from "../enum/kitchen-type.enum";
import {IClass} from "../../../interface/class";

export interface IKitchen {
    createTraditionalDish(): unknown;
    createOtherDish(): unknown;
}

export type IKitchenMap = Map<KitchenType, IClass<IKitchen>>;
