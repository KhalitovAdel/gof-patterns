export interface IOrderEntity {
    getWeight(): number;

    incrementWeight(value: number): void;

    decrementWeight(value: number): void;
}
