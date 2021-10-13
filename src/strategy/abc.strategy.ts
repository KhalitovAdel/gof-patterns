import {IStrategy} from "./interface/strategy.interface";

export class AbcStrategy implements IStrategy {
    public exec(value: number[]): number[] {
        return value.sort((a, b) => a - b);
    }
}
