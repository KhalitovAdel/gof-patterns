import {IAction} from "./action.interface";

export interface IMediator {
    notify(instance: IAction): void;
}
