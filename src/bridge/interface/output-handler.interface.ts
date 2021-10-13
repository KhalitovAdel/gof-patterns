import {IDish} from "./dish.interface";

export interface IOutputHandler {
    handle(dishes: IDish[]): IDish | undefined;
}
