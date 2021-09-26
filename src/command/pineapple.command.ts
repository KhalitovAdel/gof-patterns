import {ICommand} from "./interface/command.interface";

export class PineappleCommand implements ICommand {
    constructor(protected readonly pizza: string[]) {}
    do(): void {
        this.pizza.push('pineapple');
    }

    reset(): void {
        this.pizza.length = this.pizza.length - 1;
    }

}
