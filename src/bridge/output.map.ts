import {OutputEnum} from "./interface/output.enum";
import {IOutputHandler} from "./interface/output-handler.interface";
import {FirstDish} from "./first.dish";
import {SecondDish} from "./second.dish";
import {ThirdDish} from "./third.dish";
import {DessertDish} from "./dessert.dish";
import {IClass} from "../interface/class";

export const outputMap: Map<OutputEnum, IClass<IOutputHandler>> = new Map<OutputEnum, IClass<IOutputHandler>>([
    [OutputEnum.FIRST, FirstDish],
    [OutputEnum.SECOND, SecondDish],
    [OutputEnum.THIRD, ThirdDish],
    [OutputEnum.DESSERT, DessertDish],
]);
