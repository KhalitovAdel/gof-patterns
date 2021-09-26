import {ICommand} from "./interface/command.interface";

export class SeafoodCommand implements ICommand {
    constructor(protected readonly pizza: string[]) {}
    do(): void {
        this.pizza.push('seafood');
    }

    reset(): void {
        this.pizza.length = this.pizza.length - 1;
    }

}
