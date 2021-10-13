import {SortType} from "./enum/sort-type.enum";
import {IStrategy} from "./interface/strategy.interface";
import {AbcStrategy} from "./abc.strategy";
import {CbaStrategy} from "./cba.strategy";

export const strategyMap = new Map<SortType, IStrategy>([
    [SortType.ABC, new AbcStrategy()],
    [SortType.CDA, new CbaStrategy()],
])
