import {IKitchen} from "./interface/kitchen.interface";
import {IDish} from "../../bridge/interface/dish.interface";

export class JapaneseKitchen implements IKitchen {
    createTraditionalDish(): IDish[] {
        return null as unknown as IDish[];
    }

    createOtherDish(): IDish[] {
        return null as unknown as IDish[];
    }
}
