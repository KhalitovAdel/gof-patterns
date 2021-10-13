import {SortType} from "./enum/sort-type.enum";
import {strategyMap} from "./strategy.map";

export class Context {

    private result = [1,2,3,4,5,6,7,8,9,0];

    getResult(type: SortType) {
        const strategy = strategyMap.get(type);
        if (!strategy) throw new Error();

        return strategy.exec(this.result);
    }
}
