import {IOrderEntity} from "./interface/order-entity.interface";

export class Box implements IOrderEntity {

    constructor(protected otherGoodsOrBoxes: IOrderEntity[]) {}

    decrementWeight(value: number): void {
        this.otherGoodsOrBoxes.forEach(el => el.decrementWeight(value));
    }

    getWeight(): number {
        return this.otherGoodsOrBoxes.reduce((acc, curr) => acc + curr.getWeight(), 0);
    }

    incrementWeight(value: number): void {
        this.otherGoodsOrBoxes.forEach(el => el.incrementWeight(value));
    }
}
