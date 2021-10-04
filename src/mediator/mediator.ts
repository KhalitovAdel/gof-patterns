import {IMediator} from "./interface/mediator.interface";
import {IAction} from "./interface/action.interface";

export class Mediator implements IMediator {

    constructor(private readonly sender: Caller) {}

    notify(instance: IAction): void {
        this.sender.notify();
    }
}
