import {ICommand} from "./interface/command.interface";

export class BaconCommand implements ICommand {
    constructor(protected readonly pizza: string[]) {}
    do(): void {
        this.pizza.push('bacon');
    }

    reset(): void {
        this.pizza.length = this.pizza.length - 1;
    }

}
