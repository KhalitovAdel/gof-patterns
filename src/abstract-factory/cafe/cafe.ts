import {KitchenType} from "../kitchen/enum/kitchen-type.enum";
import {IKitchen} from "../kitchen/interface/kitchen.interface";
import {KitchenFactory} from "../kitchen/kitchen.factory";
import {IDish} from "../../bridge/interface/dish.interface";

export class Cafe {

    constructor(protected readonly kitchenFactory: KitchenFactory) {}

    takeOrder(kitchenType: KitchenType, isTraditionalDish: boolean): IDish[] {
        const kitchen: IKitchen = this.kitchenFactory.getKitchen(kitchenType);
        /**
         * This is only example.
         * Because we can use here all methods of the kitchen.
         */
        return isTraditionalDish ? kitchen.createTraditionalDish() : kitchen.createOtherDish();
    }
}
