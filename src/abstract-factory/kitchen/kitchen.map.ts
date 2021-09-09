import {KitchenType} from "./enum/kitchen-type.enum";
import {IClass} from "../../interface/class";
import {IKitchen} from "./interface/kitchen.interface";
import {AmericanKitchen} from "./american-kitchen";
import {JapaneseKitchen} from "./japanese-kitchen";
import {UkraineKitchen} from "./ukraine-kitchen";

export const kitchenMap = new Map<KitchenType, IClass<IKitchen>>([
    [KitchenType.USA, AmericanKitchen],
    [KitchenType.JAPAN, JapaneseKitchen],
    [KitchenType.UKRAINE, UkraineKitchen],
])
