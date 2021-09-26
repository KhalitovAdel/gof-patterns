import {ICommand} from "./interface/command.interface";

export class MushroomCommand implements ICommand {
    constructor(protected readonly pizza: string[]) {}
    do(): void {
        this.pizza.push('mushroom');
    }

    reset(): void {
        this.pizza.length = this.pizza.length - 1;
    }

}
