import {IOrderEntity} from "./interface/order-entity.interface";

export class Good implements IOrderEntity {

    constructor(protected weight: number) {}

    getWeight(): number {
        return this.weight;
    }

    incrementWeight(value: number): void {
        this.weight += value;
    }

    decrementWeight(value: number): void {
        this.weight -= value;
    }
}
