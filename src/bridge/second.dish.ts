import {IOutputHandler} from "./interface/output-handler.interface";
import {IDish} from "./interface/dish.interface";
import {OutputEnum} from "./interface/output.enum";

export class SecondDish implements IOutputHandler  {
    handle(dishes: IDish[]): IDish | undefined {
        return dishes.find(el => el.getDishType() === OutputEnum.SECOND);
    }

}