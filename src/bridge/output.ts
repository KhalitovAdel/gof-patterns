import {IClass} from "../interface/class";
import {IOutputHandler} from "./interface/output-handler.interface";
import {OutputEnum} from "./interface/output.enum";

export class Output {
    constructor(protected readonly outputMap: Map<OutputEnum, IClass<IOutputHandler>>) {}

    getInstance(type: OutputEnum): IOutputHandler {
        const constructor = this.outputMap.get(type);
        if (!constructor) throw new Error('Not null expected');

        return new constructor();
    }
}
