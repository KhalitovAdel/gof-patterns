import {ICommand} from "./interface/command.interface";
import {Ingredient} from "./enum/ingredient.enum";
import {IClass} from "../interface/class";

export class CommandManager {

    protected readonly pizza: string[] = [];

    protected commandsToReset: ICommand[] = [];

    constructor(protected readonly commandMap: Map<Ingredient, IClass<ICommand>>) {}

    do(type: Ingredient) {
        const command = this.commandMap.get(type)
        if (!command) throw new Error('Impossible type');
        const instanceOfCommand = new command(this.pizza);
        instanceOfCommand.do();
        this.commandsToReset.push(instanceOfCommand);
    }

    reset() {
        const command = this.commandsToReset[this.commandsToReset.length - 1];
        command.reset();
        this.commandsToReset.length = this.commandsToReset.length - 1;
    }
}
