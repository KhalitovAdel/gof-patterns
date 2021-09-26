import {CommandManager} from "./command-manager";
import {commandMap} from "./command.map";
import {Ingredient} from "./enum/ingredient.enum";

const pizzaManager = new CommandManager(commandMap);

pizzaManager.do(Ingredient.BACON);
pizzaManager.do(Ingredient.BACON);
pizzaManager.reset();
pizzaManager.do(Ingredient.SEAFOOD);
pizzaManager.do(Ingredient.CHEESE);
