import {IStrategy} from "./interface/strategy.interface";

export class CbaStrategy implements IStrategy {
    public exec(value: number[]): number[] {
        return value.sort((a, b) => b - a);
    }
}
