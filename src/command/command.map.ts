import {Ingredient} from "./enum/ingredient.enum";
import {ICommand} from "./interface/command.interface";
import {IClass} from "../interface/class";
import {MushroomCommand} from "./mushroom.command";
import {BaconCommand} from "./bacon.command";
import {CheeseCommand} from "./cheese.command";
import {PineappleCommand} from "./pineapple.command";
import {SeafoodCommand} from "./seafood.command";

export const commandMap = new Map<Ingredient, IClass<ICommand>>([
    [Ingredient.BACON, BaconCommand],
    [Ingredient.CHEESE, CheeseCommand],
    [Ingredient.MUSHROOM, MushroomCommand],
    [Ingredient.PINEAPPLE, PineappleCommand],
    [Ingredient.SEAFOOD, SeafoodCommand],
]);
