import {CommandManager} from "../command/command-manager";
import {Ingredient} from "../command/enum/ingredient.enum";

export class Interpreter {
    constructor(protected readonly command: CommandManager) {}

    /**
     *
     * @param {String} command - Example: SEAFOOD && PINEAPPLE && CHEESE
     */
    exec(command: string) {
        const commands = this.getCommands(command);
        commands.forEach(el => this.command.do(el));
    }

    protected getCommands(command: string) {
        const commandArray = command.split('&&').map(el => el.trim());
        if (!commandArray.every(el => Object.keys(Ingredient).includes(el))) throw new Error('Invalid command');

        return commandArray as Ingredient[];
    }
}
