import {DishMap} from "./interface/stove.interface";
import {DishType} from "./interface/dish-type.enum";

export class Stove {
    // ProductMap we are getting from constructor by our DI, or when we init constructor by hand.
    constructor(protected readonly dishMap: DishMap) {}

    public createDish(type: DishType) {
        const handler = this.dishMap.get(type);
        if (!handler) throw new Error(`Unknown type: ${type}`);
        //Here we can call our DI to get instance by token (If token is handler.name)
        const instance = new handler();
        return instance.create();
    }
}
