import {IAction} from "./interface/action.interface";
import {IMediator} from "./interface/mediator.interface";

export class Flowers implements IAction {

    constructor(private readonly mediator: IMediator) {}

    makeAction(): void {
        //do some
        this.callBack()
    }

    callBack() {
        this.mediator.notify(this);
    }
}
