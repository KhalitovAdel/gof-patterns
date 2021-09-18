import {Cafe} from "../abstract-factory/cafe/cafe";
import {Output} from "./output";
import {outputMap} from "./output.map";
import {OutputEnum} from "./interface/output.enum";
import {IDish} from "./interface/dish.interface";

export class CafeV2 extends Cafe {
    protected output = new Output(outputMap);

    takeOrderAndPrint(printType: OutputEnum, ...property: Parameters<Cafe["takeOrder"]>): IDish | undefined {
        const result: IDish[] = this.takeOrder(...property);

        const handler = this.output.getInstance(printType);

        return handler.handle(result);
    }

}
