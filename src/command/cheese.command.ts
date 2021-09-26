import {ICommand} from "./interface/command.interface";

export class CheeseCommand implements ICommand {
    constructor(protected readonly pizza: string[]) {}
    do(): void {
        this.pizza.push('cheese');
    }

    reset(): void {
        this.pizza.length = this.pizza.length - 1;
    }

}
