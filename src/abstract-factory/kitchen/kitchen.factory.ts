import {KitchenType} from "./enum/kitchen-type.enum";
import {IKitchen, IKitchenMap} from "./interface/kitchen.interface";

export class KitchenFactory {

    // IKitchenMap we are getting from constructor by our DI, or when we init constructor by hand.
    constructor(protected readonly kitchenMap: IKitchenMap) {}

    getKitchen(type: KitchenType): IKitchen {
        const handler = this.kitchenMap.get(type);
        if (!handler) throw new Error(`Unknown type ${type}`);

        /**
         * Here we can call our DI to get instance by token (If token is handler.name)
         *
         *
         * Main difference from the Abstract method:
         * Abstract factory return instance of the service,
         * Otherwise abstract method make some action with one method of the service only.
         */
        return new handler();
    }
}
