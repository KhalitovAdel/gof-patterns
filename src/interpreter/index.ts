import {Interpreter} from "./Interpreter";
import {CommandManager} from "../command/command-manager";
import {commandMap} from "../command/command.map";
import {Ingredient} from "../command/enum/ingredient.enum";

const interpreter = new Interpreter(new CommandManager(commandMap));

//set first ingredients
interpreter.exec(`${Ingredient.BACON} && ${Ingredient.CHEESE} && ${Ingredient.SEAFOOD}`);

//set additional ingredients
interpreter.exec(`${Ingredient.BACON} && ${Ingredient.CHEESE} && ${Ingredient.SEAFOOD}`);
